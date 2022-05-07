class Producto {
    constructor(id, titulo, precio, img) {

        if(!id) throw new error ('falta id')
        if(!titulo) throw new error ('falta titulo')
        if(!precio) throw new error ('falta precio')
        if(!img) throw new error ('falta img')

        this.id = id
        this.titulo = titulo
        this.precio = precio
        this.img = img
}
}

module.exports = Producto