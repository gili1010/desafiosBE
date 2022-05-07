const fs = require('fs')
const Producto = require('./productos')


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    async leer(){
        const productosArray = await fs.promises.readFile(this.ruta,'utf-8')
        this.productos = JSON.parse(productosArray)
        return this.productos
        }

    /* - Recibe un producto y lo guarda en Array lista. this.productos = [] */
    async save(datos) {
        const producto = new Producto(datos.id, datos.titulo, datos.precio, datos.img)
        this.productos.push(producto)
        const archivoJson=JSON.stringify(this.productos,null,2)
        await fs.promises.writeFile(this.ruta,archivoJson)
    }

     /* - Recibe un id y devuelve el objeto con ese id, o vacio si no está. */
     getById(id){
        this.productos = this.productos.filter(element => element.id == id);
            return (this.productos)
        }

    /* - Elimina el objeto con el id buscado.*/
    deleteById(id){
        this.productos = this.productos.filter(element => element.id != id);
       console.log(this.productos);
/*        return this.guardar() */
    }

    /* - Elimina todos los objetos presentes.*/
    deleteAll(){
        this.productos = []
        return(this.productos)
    }
} 

module.exports = Contenedor