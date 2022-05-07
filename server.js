const express = require('express')

const { routerApiProductos } = require('./routers/routerApiProductos.js')

const app = express()

app.use('/static', express.static('public'));

//------------------------------------------------------------------------------------------//
app.use(routerApiProductos)

//------------------------------------------------------------------------------------------//

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })