const express = require('express');
const dotenvConfig = require('dotenv').config();
const PORT = require('./config');
const cors = require('cors');
const songsRouter = require('./routes/songRoutes');
const mongoose = require('mongoose');
const Song = require('./models/song');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/api/songs',songsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
});
