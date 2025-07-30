const express = require('express');
const router = express.Router();

router.use(require('./health'));
router.use(require('./hello'));
router.use(require('./echo'));
router.use(require('./info'));

module.exports = router;