const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const notesCTRL = require('../../controllers/api/notes');

router.post('/', notesCTRL.create);

module.exports = router;