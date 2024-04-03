const contenedor = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();


const carrito = []; // ésta version es en fomrato arreglo.

const agregarCarrito = (e) =>{
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };


    // metodo para correr array
    const posicion = carrito.findIndex((item) => {
               return item.titulo === producto.titulo;
    });

    // agregamos al carrito 
    if (posicion === -1){
        carrito.push(producto);
    } else {
        carrito[posicion].cantidad++;
    };


   mostrarCarrito();
};

const mostrarCarrito = () =>{

    contenedor.textContent = ''; // PARA QUE EMPIECE VACIO

    //se elimiva el object value y simplemente ingresamos al carrito que ya es un arreglo.
    carrito.forEach((item) =>{
        const clone = template.content.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.bg-primary').textContent = item.cantidad;
        fragment.appendChild(clone);

    });
    contenedor.appendChild(fragment);


};

botones.forEach((item) => {
    item.addEventListener('click', agregarCarrito);
});

