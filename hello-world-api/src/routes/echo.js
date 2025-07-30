const express = require('express');
const router = express.Router();
const { success, error } = require('../utils/response');

/**
 * @swagger
 * /echo:
 *   post:
 *     summary: Echo service
 *     description: Returns the posted JSON data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Echoed data
 *       400:
 *         description: Invalid request body
 */
router.post('/echo', (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return next(error('Request body is required', 400));
  }
  
  res.json(success('Echo response', req.body));
});

module.exports = router;