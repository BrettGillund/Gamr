const axios = require('axios');

const api_router = require('express').Router();
console.log(process.env.API_KEY)
api_router.get('/api/games', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`).then((data) => {
        // console.log(data.data)
        res.json(data.data);
    });
});
api_router.get('/api/games/pc', (req, res) => {
    console.log('this route is hit')
    axios.get(`https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`).then((data) => {
        console.log(data.data)
        res.json(data.data);
    })
})

module.exports = api_router;