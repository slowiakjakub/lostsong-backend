const express = require('express');
const router = express.Router();

// Mock data
let songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
];

// READ all songs
router.get('/all', (req, res) => {
    res.json(songs);
});

// CREATE a song
router.post('/create', (req, res) => {
    const newSong = req.body;
    songs.push(newSong);
    res.json(newSong);
});

// READ a specific song
router.get('/:id', (req, res) => {
    const song = songs.find(s => s.id === parseInt(req.params.id));
    res.json(song);
});

// UPDATE a song
router.put('/:id', (req, res) => {
    const song = songs.find(s => s.id === parseInt(req.params.id));
    Object.assign(song, req.body);
    res.json(song);
});

// DELETE a song
router.delete('/:id', (req, res) => {
    songs = songs.filter(s => s.id !== parseInt(req.params.id));
    res.json({ message: 'Song deleted' });
});

module.exports = router;