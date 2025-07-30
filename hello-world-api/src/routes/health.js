const express = require('express');
const router = express.Router();
const { success } = require('../utils/response');

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the service health status
 *     responses:
 *       200:
 *         description: Service is healthy
 */
router.get('/health', (req, res) => {
  res.json(success('Service is healthy', { status: 'up' }));
});

module.exports = router;