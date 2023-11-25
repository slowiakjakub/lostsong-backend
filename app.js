const express = require('express');
const dotenvConfig = require('dotenv').config();
const PORT = require('./config');
const songsRouter = require('./routes/songs');
const mongoose = require('mongoose');
const Song = require('./models/song');
const app = express();
app.use(express.json());
app.use('/songs',songsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

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