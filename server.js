const express = require('express')
const app = express()

const produtosRoutes = require('./routes/pages')

app.use(produtosRoutes);

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})