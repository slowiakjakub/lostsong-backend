const express = require('express');
const PORT = require('./config');
const songsRouter = require('./routes/songs');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/songs',songsRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    // Define a "song" schema
const SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String
});

const Song = mongoose.model('Songs', SongSchema);

const shakiraSong = new Song({
    title: "Chantaje",
    artist: "Shakira",
    album: "ShakiraReturns"
});

shakiraSong.save();

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})

app.get("/status", myFunction);

function myFunction (request,response) {
    const status = {
        "Status": "Running"
    };

    response.send(status);
}