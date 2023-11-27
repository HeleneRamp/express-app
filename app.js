const express = require('express');
const app = express();

const welcome = (req, res) => {
    res.send('Welcome to my favourite movie list')
};
app.get("/", welcome);

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        year: "1941",
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        year: "1972",
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        year: "1994",
        color: true,
        duration: 180,
    },
];


const getMovies = (req, res) => {
    res.json(movies);
}
app.get("/api/movies", getMovies);

const getIdMovies = (req, res) => {
    const id = parseInt(req.params.id);

    const movie = movies.find((movie) => movie.id === id);

    if(movie != null) {
        res.json(movie);
    } else {
        res.sendStatus(404);
    }
}

app.get("/api/movies/:id", getIdMovies);

module.exports = app;