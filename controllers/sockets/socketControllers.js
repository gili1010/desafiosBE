const { obtenerMensajes, guardarMensaje } = require('../../mensajes.js')
const { dbproductos } = require("../../database/dbproductos.js")

function eventoCnxController(socket, io) {
    const mensajes = obtenerMensajes()
    const productos = dbproductos.obtenerTodos()
    socket.emit('mensajes', { mensajes })
    socket.emit('productos',{productos})
    socket.on('mensaje', mensaje => eventoMensajeController(socket, io, mensaje))
}

function eventoMensajeController(socket, io, mensaje) {
    guardarMensaje(mensaje)
    const mensajes = obtenerMensajes()
    io.sockets.emit('mensajes', { mensajes })
    io.sockets.emit('productos', { productos })
}

module.exports = eventoCnxController