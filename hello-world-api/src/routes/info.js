const express = require('express');
const router = express.Router();
const { success } = require('../utils/response');
const os = require('os');
const packageInfo = require('../../package.json');

// Track server start time
const startTime = new Date();

/**
 * @swagger
 * /info:
 *   get:
 *     summary: Service information
 *     description: Returns version, uptime, and environment information
 *     responses:
 *       200:
 *         description: Service information
 */
router.get('/info', (req, res) => {
  const uptime = Math.floor((new Date() - startTime) / 1000);
  
  const info = {
    version: packageInfo.version,
    name: packageInfo.name,
    uptime: `${uptime} seconds`,
    environment: process.env.NODE_ENV || 'development',
    hostname: os.hostname(),
    platform: os.platform(),
    memory: {
      total: `${Math.round(os.totalmem() / (1024 * 1024))} MB`,
      free: `${Math.round(os.freemem() / (1024 * 1024))} MB`
    }
  };
  
  res.json(success('Service information', info));
});

module.exports = router;