const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pino = require('pino-http');
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// Create Express app
const app = express();

// Add correlation ID middleware
app.use((req, res, next) => {
  req.correlationId = req.headers['x-correlation-id'] || Math.random().toString(36).substring(2, 15);
  res.setHeader('x-correlation-id', req.correlationId);
  next();
});

// Configure middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(pino({
  genReqId: (req) => req.correlationId,
  redact: ['req.headers.authorization'],
}));

// Configure routes
app.use('/', require('./routes'));

// Error handling middleware
app.use((err, req, res, _next) => {
  req.log.error({ err });
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    data: null,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found',
    data: null,
    timestamp: new Date().toISOString()
  });
});

module.exports = app;