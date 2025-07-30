const express = require('express');
const router = express.Router();
const { success, error } = require('../utils/response');

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Basic hello world endpoint
 *     description: Returns a greeting message
 *     responses:
 *       200:
 *         description: Greeting message
 */
router.get('/hello', (req, res) => {
  res.json(success('Hello, World!', { greeting: 'Hello, World!' }));
});

/**
 * @swagger
 * /hello/{name}:
 *   get:
 *     summary: Personalized greeting
 *     description: Returns a personalized greeting with the provided name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Personalized greeting
 *       400:
 *         description: Invalid name parameter
 */
router.get('/hello/:name', (req, res, next) => {
  const { name } = req.params;
  
  if (!name || name.trim() === '') {
    return next(error('Name parameter is required', 400));
  }
  
  const sanitizedName = name.replace(/[^a-zA-Z0-9 ]/g, '');
  res.json(success(`Hello, ${sanitizedName}!`, { greeting: `Hello, ${sanitizedName}!` }));
});

module.exports = router;