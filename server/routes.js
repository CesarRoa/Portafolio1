const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get("/hello", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "hello test",
  });
});

router.get("/uefa-rankings", async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://footapi7.p.rapidapi.com/api/rankings/uefa/countries',
        headers: {
            'X-RapidAPI-Key': '056d2999cemshb3444f3c853b8a3p1ed62cjsn076f8982e203',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch UEFA rankings" });
    }
});


module.exports = router;
