const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'))
})

app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'books.html'))
})

app.listen(8080, () => console.log('Server listening on 8080'))
