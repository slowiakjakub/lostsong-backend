const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/',songController.getAllSongs);
router.get('/top', songController.getTopSongs);
router.post('/',songController.addSong);

module.exports = router;