const multer = require("multer")

const express = require("express")
const http = require("http")

const PORT = 3001
const app = express()
const server = http.createServer(app)

const upload = multer ({dest: "uploads"})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index")
})

app.post("/upload", upload.single("file"), (req, res) => {
	res.send("Hello")
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))