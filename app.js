const express = require('express');
const PORT = require('./config');
const songsRouter = require('./routes/songs');

const app = express();
app.use(express.json());
app.use('/songs',songsRouter);

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