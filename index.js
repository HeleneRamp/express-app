const express = require('express');
const app = express();

const port = 5000;

const welcome = (req, res) => {
    res.send("Welcome to Express")
}
app.get("/", welcome)

const welcomeName = (req, res) =>{
    res.send(`Welcome ${req.params.name}`)
}
app.get("/users/:name", welcomeName);


app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (err)=>{
    console.error("Error:", err.message);
})

//COCKTAILS

const cocktails  = [
    {
        id: 1,
        name: "Margerita",
    },
    {
        id: 2,
        name: "Mojito",
    },
    {
        id: 3,
        name: "Cuba Libre",
    },
];

const getCocktails = (req, res) => {
    res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails)

//MOVIES

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

app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (err) => {
    console.error(("Error", err.message));
})

const welcome = (req, res) => {
    res.send('Welcome to my favourite movie list')
};
app.get("/", welcome);

const getMovies = (req, res) => {
    res.status(200).json(movies);
}
app.get("/api/movies", getMovies);

const getIdMovies = (req, res) => {
    const getId = parseInt(req.params.id);
    getId <= 0 || getId >= movies.length ? res.status(404).send("Not Found") : res.status(200).json(movies[getId -1]);
}

app.get("/api/movies/:id", getIdMovies)