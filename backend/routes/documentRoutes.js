const express = require('express');
const router = express.Router();
const { getDocuments } = require('../controllers/documentsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getDocuments);

module.exports = router;
