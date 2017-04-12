const express = require('express')
const path = require('path')
const webpack = require('webpack')

const app = express()

const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require('./webpack.config.js')

app.use(webpackMiddleware(
  webpack(webpackConfig),
  { publicPath: '/' }
))

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
