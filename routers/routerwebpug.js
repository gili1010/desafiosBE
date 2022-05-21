const { Router } = require('express')
const express = require('express')

const routerwebpug = new Router()

routerwebpug.use(express.json())
routerwebpug.use(express.urlencoded({ extended: true }))

const { dbproductos } = require('../database/dbproductos.js')

routerwebpug.get('/form',(req,res)=>{
    res.render('nivel')
});
routerwebpug.get('/productos',(req,res)=>{
    let content = dbproductos.obtenerTodos()
    res.render('productos', {content})
});
routerwebpug.post("/productos", (req, res) => {
    dbproductos.agregarProducto(req.body)
    //res.status(201).json(productoAgregado)
    let content = dbproductos.obtenerTodos()
    return res.render('productos', {content});
});

module.exports={routerwebpug}