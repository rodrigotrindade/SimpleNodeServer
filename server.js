const express = require('express')
const dotenv = require('dotenv')
const app = express()

const produtosRoutes = require('./routes/pages')

app.use(produtosRoutes);

dotenv.config();
const port = process.env.port || 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})