require("dotenv").config()
const multer = require("multer")
const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")

const File = require("./models/File")

const express = require("express")
const http = require("http")

const PORT = process.env.PORT || 3001
const app = express()
const server = http.createServer(app)

const upload = multer ({dest: "uploads"})

mongoose.connect(process.env.DATABASE_URL)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index")
})

app.post("/upload", upload.single("file"), async (req, res) => {
	const fileData = {
		path: req.file.path,
		originalName: req.file.originalname,
	}

	if (req.body.password != null && req.body.password !== "") {
		fileData.password = await bcrypt.hash(req.body.password, 12)
	}

	const file = await File.create(fileData)
	
	res.render("index", {fileLink: `${req.headers.origin}/file/${file.id}`})
})

app.get("/file/:id", (req, res) => {

})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))