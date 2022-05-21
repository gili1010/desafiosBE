const socket = io()

socket.on('mensajes', ({ mensajes }) => {
    console.log(mensajes)
    mostrarMensajes(mensajes)
})
socket.on('productos', ({ productos }) => {
    console.log(productos)
    mostrarProductos(productos)
})

const btn = document.getElementById('btn_enviar')
btn.addEventListener('click', event => {
    const autor = document.getElementById('inputAutor').value
    const texto = document.getElementById('inputTexto').value
    socket.emit('mensaje', { autor, texto })
})

/* function buscarPlantilla(url) {
    return fetch(url).then(res => res.text())
}

function armarHtmlRemoto(url, contexto) {
    buscarPlantilla(url).then(plantilla => {
        const generarHtml = Handlebars.compile(plantilla);
        return generarHtml(contexto)
    })
}
 */
async function armarListaDesordenada(lineas) {
    const listItems = lineas.map( l => `<li>${l}</li>`)
    const html = `<ul>${listItems.join('')}</ul>`
    return html
}
async function armarListatbody(lineas) {
    const listItems = lineas.map( l => `<td>${l}</td>`)
    //const html = `<ul>${listItems.join('')}</ul>`
    return listItems
}

async function mostrarMensajes(mensajes) {
    const divMensajes = document.getElementById('mensajes')
    const lineasMensajes = mensajes.map(o => `${o.autor}: ${o.texto}`)
    divMensajes.innerHTML = await armarListaDesordenada(lineasMensajes)
}

async function mostrarProductos(productos) {
    const divtbody = document.getElementById('tbody')
    const lineasMensajes = productos.map(p => `<th>${p.id}</th> <th>${p.titulo}</th> <th>${p.precio}</th> <th>${p.img}</th>`)
    divtbody.innerHTML = await armarListatbody(lineasMensajes)
}
