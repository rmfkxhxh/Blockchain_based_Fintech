const express = require("express");
const cors = require("cors");
const phantom = require('phantom');
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = 4000;
const app = express();

app.use(cors());

const puppeteer = require('puppeteer');

const loadJsSite = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://xangle.io/project/BTC/profile');

    const desc = await page.$eval('.desc', el => el.innerText)

    return (desc)
    await browser.close();
};

app.get("/", (req, res) => {
    loadJsSite()
        .then((data) => {

            console.log(typeof(data))

            res.send(data)
        })
});

app.listen(PORT, () => {
    console.log('4');
    console.log(`Example app listening at http://localhost:${PORT}`)
}
);