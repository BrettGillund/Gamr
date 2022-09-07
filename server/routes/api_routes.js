const axios = require('axios');
const api_router = require('express').Router();

// console.log(process.env.API_KEY)

api_router.get('/api/search', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${searchedGame}`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    });
});

api_router.get('/api/games', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2021-10-10,2022-10-10&ordering=-added`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    });
});

api_router.get('/api/upcoming-releases', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2022-12-31,2023-12-31&ordering=-added`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    });
});

api_router.get('/api/pc', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2017-10-10,2022-10-10&ordering=-added&platforms=4`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
});
api_router.get('/api/playstation', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2017-10-10,2022-10-10&ordering=-added&platforms=187`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
});
api_router.get('/api/xbox', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2017-10-10,2022-10-10&ordering=-added&platforms=186`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
})
api_router.get('/api/nintendo-switch', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2017-10-10,2022-10-10&ordering=-added&platforms=7`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
})
module.exports = api_router;