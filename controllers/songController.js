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

exports.updateSong = (req, res) => {
  const song = songs.find((s) => s.id === parseInt(req.params.id));
  Object.assign(song, req.body);
  res.json(song);
};

exports.deleteSong = (req, res) => {
  songs = songs.filter((s) => s.id !== parseInt(req.params.id));
  res.json({ message: "Song deleted" });
};
