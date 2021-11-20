const url = require("url")
const addr = "http://localhost:3000/default.html?year=2021&month=Oct"

var strQuery = url.parse(addr, true)


console.log(strQuery.host)
console.log(strQuery.pathname)
console.log(strQuery.search)

var data = strQuery.query;
console.log(data) //object with key and value
