const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;