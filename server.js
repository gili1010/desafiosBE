const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: socketServer } = require('socket.io')

const { routerApiProductos } = require('./routers/routerApiProductos.js');
const { routerwebpug } = require('./routers/routerwebpug.js');
const { routerwebejs } = require('./routers/routerwebejs.js');

const webRouter = require('./routers/webRouter.js')
const eventoCnxController = require('./controllers/sockets/socketControllers.js')

const app = express()

const httpServer = new HttpServer(app)
const io = new socketServer(httpServer)
/* app.set('view engine','pug'); */

 app.set('view engine', 'ejs');
//------------------------------------------------------------------------------------------//
//Uso de EJS
app.use(routerwebejs)
//------------------------------------------------------------------------------------------//
//Uso de PUG
app.use(routerwebpug)

//------------------------------------------------------------------------------------------//

//app.use('/static', express.static('public'));

app.use(express.static('public'))

app.use('/', webRouter)

io.on('connection', socket => eventoCnxController(socket, io))

//------------------------------------------------------------------------------------------//
app.use(routerApiProductos)

//------------------------------------------------------------------------------------------//

/* const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })
 */
const PORT = 8080
const server = httpServer.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })