const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
})

router.get('/pagina1', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'pagina1.html'))
})

router.get('/pagina2', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'pagina2.html'))
})

module.exports = router