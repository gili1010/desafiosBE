const { Router } = require('express')
const express = require('express')

const routerwebejs = new Router()

routerwebejs.use(express.json())
routerwebejs.use(express.urlencoded({ extended: true }))

const { dbproductos } = require('../database/dbproductos.js')

routerwebejs.get('/ejs/form',(req,res)=>{
    let content = dbproductos.obtenerTodos()
    res.render('inicio', {content})
});
routerwebejs.get('/ejs/productos',(req,res)=>{
    let content = dbproductos.obtenerTodos()
    res.render('prod', {content})
});
routerwebejs.post("/ejs/productos", (req, res) => {
    dbproductos.agregarProducto(req.body)
    //res.status(201).json(productoAgregado)
    let content = dbproductos.obtenerTodos()
    return res.render('prod', {content});
});



module.exports={routerwebejs}