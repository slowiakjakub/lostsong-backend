const Song = require("../models/song");

exports.getAllSongs = (req, res) => {
  Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.status(500).json({ message: err.message }));
};

exports.getTopSongs = (req, res) => {
  Song.aggregate([
    {
      $group: {
        _id: { title: "$title", artist: "$artist" },
        occurrenceCount: { $sum: 1 }
      }
    },
    { $sort: { occurrenceCount: -1 } },
    { $limit: 5 },
    {
      $project: {
        _id: 0,
        title: "$_id.title",
        artist: "$_id.artist",
        occurrenceCount: 1
      }
    }
  ])
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