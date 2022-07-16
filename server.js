const express = require("express")
const http = require("http")

const PORT = 3001
const app = express()
const server = http.createServer(app)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index")
})

app.post("/upload", (req, res) => {
	res.send("Hello")
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))