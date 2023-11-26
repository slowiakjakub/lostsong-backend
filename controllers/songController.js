// Mock data
let songs = [
  { id: 1, title: "Song 1", artist: "Artist 1", album: "Album 1" },
  { id: 2, title: "Song 2", artist: "Artist 2", album: "Album 2" },
];

exports.getAllSongs = (req, res) => {
  res.json(songs);
};

exports.addSong = (req, res) => {
  const newSong = req.body;
  songs.push(newSong);
  res.json(newSong);
};

exports.getSong = (req, res) => {
  const song = songs.find((s) => s.id === parseInt(req.params.id));
  res.json(song);
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
