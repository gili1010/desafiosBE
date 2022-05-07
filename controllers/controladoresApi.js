const fs = require('fs')
const { dbproductos } = require("../database/dbproductos.js")
const Contenedor = require('../contenedor.js')

const contenedor = new Contenedor('../productos.txt');

const producto = {
    id:1,
    titulo:'Gaseosa',
    precio:`$150`,
    img:'img'
}
const producto1 = {
    id:2,
    titulo:'cerveza',
    precio:`$180`,
    img:'img'
}

contenedor.save(producto).then((producto) =>{
    return producto
})

async function y() {
    await contenedor.save(producto1)
}
y();

console.log(contenedor);

/* let resultado = contenedor.leer()/* .then((list) => {
        return resultado = (list)
    }) */ 

let x =Math.floor(Math.random()*10) ;
 
const controladoresApi = {
    getid: (req, res) => {
            res.json(dbproductos.obtenerSegunId(x));
    },
    getproducto:(req, res) =>{
        const id = req.params.idProducto
        try {
            res.json(dbproductos.obtenerSegunId(id));       
        } catch (error) {
            res.status(404).json({error: error.message})
        }

    },
    getproductos: (req, res) => {
        //contenedor.leer().then((list) => {
        //res.json(contenedor)
       // })
       if(Object.entries(req.query).length > 0){
            res.json(dbproductos.obtenerSegunTitulo(req.query.titulo))
       }else{
            res.json(dbproductos.obtenerTodos())
       }
    },
    postproductos:(req,res) => {
        const productoAgregado = dbproductos.agregarProducto(req.body)
        res.status(201).json(productoAgregado)
    },
    deleteproducto:(req,res) =>{
        const id = req.params.idProducto
        try {
            dbproductos.borrarProductoSegunId(id); 
            res.sendStatus(204)      
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    },
    putproducto: (req, res) => {
        const id = req.params.idProducto
        const datos = req.body
        try {
            const productoReemplazado = dbproductos.reemplazarSegunId(id, datos)
            res.json(productoReemplazado)
        } catch (error) {
                res.status(404).json({ error: error.message })
        }
    },
    //buscar porr titulo
    gettitulo: (req, res) => {
        res.json(dbproductos.obtenerSegunTitulo('fernet'))
    },
    //buscar por ID
    getidcont: (req, res) =>{
    res.json(contenedor.getById(2))
}
}
module.exports = {controladoresApi} 

console.log(x);
