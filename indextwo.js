const express = require('express');

const app = express();

const port = 5000;

//TEST

// const handler = (req, res) =>{
//     res.send("welcome to Express!")
// };

// app.get ("/", handler);

// const welcomeName = (req, res) => {
//     res.send(`welcome ${req.params.id}`);
// };

// app.get("/users/:id", welcomeName)

//END TEST

//LISTENING PORT 5000
app
.listen(port, () => {
    console.info(`server is listening on port ${port}`);
})
.on("error", (err) => {
    console.error("error:", err.message);
});

//COCKTAILS
const cocktails = [
    {
        id: 1,
        name: "margarita",
    },
    {
        id: 2,
        name: "mojito",
    },
    {
        id: 3,
        name: "cuba libre",
    },
];

const getCocktails = (req, res) => {
    res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails);

//CHALLENGE QUEST: MOVIES
const movies = [
    {
        id: 1,
        title: "citizen kane",
        director: " Orson wells",
        year: 1941,
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "the godfather",
        director: "francis ford coppola",
        year: 1972,
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "pulp fiction",
        director: " quentin tarantino",
        year: 1994,
        color: false,
        duration: 180,
    },
]
const sayWelcome = (req, res) => {
res.send("welcome to my favourite movie list");
}
app.get("/", sayWelcome)

const getMovies = (req, res) => {
    res.status(200).json(movies);
}
app.get("/api/movies", getMovies);

const getById = (req, res) => {
    const idMovie = parseInt(req.params.id);
    idMovie <= 0 || idMovie > movies.length ?
    res.status(404).send("Not found") :
    res.status(200).json(movies[idMovie -1])
}
app.get("/api/movies/:id", getById);