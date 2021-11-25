const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("GET route on router");
})

router.post('/', (req, res) => {
    res.send("POST route on router")
})

module.exports = router;