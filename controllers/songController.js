const Song = require("../models/song");

exports.getAllSongs = (req, res) => {
  Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.status(500).json({ message: err.message }));
};

exports.addSong = (req, res) => {
  const newSong = new Song(req.body);
  newSong
    .save()
    .then(() => res.json(newSong))
    .catch((err) => res.status(500).json({ message: err.message }));
};