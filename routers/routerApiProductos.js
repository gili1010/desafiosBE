const { Router } = require('express')
const express = require('express')
const { controladoresApi } = require('../controllers/controladoresApi.js')

const routerApiProductos = new Router()

routerApiProductos.use(express.json())
routerApiProductos.use(express.urlencoded({ extended: true }))

routerApiProductos.get('/api/id', controladoresApi.getid)
routerApiProductos.get('/api/productos', controladoresApi.getproductos)
routerApiProductos.post('/api/productos', controladoresApi.postproductos)
routerApiProductos.delete('/api/productos/:idProducto', controladoresApi.deleteproducto)
routerApiProductos.put('/api/productos/:idProducto', controladoresApi.putproducto)
routerApiProductos.get('/api/productos/:idProducto', controladoresApi.getproducto)
routerApiProductos.get('/api/titulos', controladoresApi.gettitulo)
routerApiProductos.get('/api/idcont', controladoresApi.getidcont)

module.exports={routerApiProductos}