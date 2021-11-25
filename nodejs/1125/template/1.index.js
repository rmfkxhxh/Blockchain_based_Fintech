const express = require('express')
const app = express(); // == createServer

app.set('view engine', 'pug');
app.set("views", './views');

var port = 3000
var host = '127.0.0.1'

app.get('/firsttemp', (req, res) => {
    res.render('1firstview')
})
app.get('/dynamic', (req, res) => {
    res.render('2dynamic', {
        name:"Kdigital 4 class",
        url: "https://www.daum.net"
    })
})
app.get('/dynamic2', (req, res) => {
    res.render('2dynamic', {
        name:"Apple Home Page",
        url: "https://www.apple.com"
    })
})
app.get('/dynamic3', (req, res) => {
    res.render('3dynamic', {
        name:"Apple Home Page",
        url: "https://www.apple.com"
    })
})
app.get('/hi', (req, res) => {
    res.render('4hifriend', {
        user: {id: 'rmfkxhxh', name:"민수"},
        url: "https://www.github.com/" + 'rmfkxhxh'
    })
})
app.get('/components', (req, res) => {
    res.render('5content')
})

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});