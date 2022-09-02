const axios = require('axios');
const api_router = require('express').Router();
// console.log(process.env.API_KEY)
api_router.get('/api/games', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    });
});
api_router.get('/api/pc', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=4`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
});
api_router.get('/api/playstation', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=187`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
});
api_router.get('/api/xbox', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=186`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
})
api_router.get('/api/nintendo-switch', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=7`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    })
})
module.exports = api_router;