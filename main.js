/*-----LOG IN DEL CLIENTE Y BIENVENIDA-----*/

/*let entrada = prompt("Ingresa tu nombre");
let salida = entrada + ", " + "te damos la bienvenida a Pañalera Be❤Mom.";
alert(salida);


/*-----ALGORITMO CON CONDICIONAL-----*/

/*let age = parseInt(prompt('Ingrese su edad'))

if (age < 18) {
    alert('Eres menor de edad, puedes seguir navegando pero no tienes acceso a agregar al carrito.')
} else {
    if (age > 18 ) {
        alert('Perfecto, puedes agregar al carrito. No olvides mirar las ofertas 😊')
    } else{
        alert('Para acceder al carrito necesitamos tu edad. Vuelve a intentarlo.')
    }
}*/


/*-----ALGORITMO UTILIZANDO CICLO-----*/

/*let producto = "";
let precio = 0;
let cantidad = 0;
let seguirComprando = false;
let precioTotal = 0;

do {
    producto = prompt ("Tenemos en oferta productos de higiene (Johnson & Johnson) acondicionador y shampoo. Pero también tenemos la oferta de los dos productos juntos con un %20 de descuento. ¿Está interesado en algunos de estos productos?", "Indique: shampoo; acondicionador; ambos.");
    cantidad = parseInt(prompt ("Indique la cantidad"));

    switch (producto) {
        case 'shampoo':
            precio = 600;
            break;
        case "acondicionador":
            precio = 700;
            break;
        case "ambos":
            precio = 1040;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }
    precioTotal += precio*cantidad;

    seguirComprando = confirm("¿Querés agregar otro producto?");
} while (seguirComprando);

alert( 'El total de su compra es: $' + precioTotal + '. ' + 'Gracias por su compra, queda a su disposicion la página para ver nuestro contenido. 🥰' );*/



/*---------------------------------------------------------------------------------------------*/


// creamos un array con objetos varios 
const panialeraBeMom = 
[ 
            {nombre: "huggies", categoria: "pañales",  stock: 3, precio: 2500},
            {nombre: "estrella", categoria: "algodon", stock: 5, precio: 500},
            {nombre: "johnson & johnson", categoria: "shampoo",  stock: 2,precio: 1800},
            {nombre: "avent", categoria: "chupete", stock: 0, precio: 1000},
            {nombre: "pampers", categoria: "apositos", stock: 10, precio: 1600},
            {nombre: "nuk", categoria: "mamadera", stock: 50, precio: 5000},
            {nombre: "babysec", categoria: "pañales",  stock: 20, precio: 3500},
]

//Array de productos con un produucto nuevo 
const prodNuevo= {
    nombre: "chicco",
    tipo : "pañales",  
    categoria: "pañales",  
    stock: 2,
    precio: 2500
}

//creamos un constructor de productos  para que el usuario pueda crear productos nuevos
class Producto {
    constructor(nombre, categoria, stock, precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
    }
}

//creamos una funcion para agregar productos 
function crearProducto(){
    let nombreProducto = prompt("Como se llama el producto?");
    let categoriaProducto = prompt("que categoria de producto? ('pañales' 'algodon' 'shampoo'  'chupete' 'apositos' 'mamadera' )");
    let stockProducto = parseInt(prompt("cuanto stock quiere agregar"));
    let precioProducto = parseInt(prompt("cual es el precio?"));
    
    const prodNuevo = new Producto(nombreProducto, categoriaProducto, stockProducto, precioProducto);
    
    panialeraBeMom.push(prodNuevo)   
    // console.log(prodNuevo);
    return prodNuevo;
    }

// empezamos preguntando el nombre el empleado y dandole la bienvenida
function mensajeBienvenida(){
    let nombre = prompt("Ingrese su nombre y apellido: ");
    alert(`Bienvenido, ${nombre}`);
}

// seguimos creando variables globales para empezar a contar el stock
let pañales = 0;
let algodon = 0;
let shampoo = 0;
let chupete = 0;
let apositos = 0;
let mamadera = 0;

//damos la bienvenida 
mensajeBienvenida();

let agregarProductos = prompt("Desea agregar productos? Indique 'si' o 'no'.");
    while(agregarProductos == "si"){ 
        let producto = crearProducto();       
        if(producto.categoria ==  "pañales"){
            alert(`Tu producto ${producto.nombre} Se guardo, agrego un stock de ${pañales = pañales + parseInt(producto.stock) } y su precio ${producto.precio}`);
        } else if (producto.categoria == "algodon"){
            alert(`Tu producto ${producto.nombre} Se guardo, agrego un stock de ${algodon = algodon + parseInt(producto.stock)} y su precio ${producto.precio}`);
        } else if (producto.categoria == "shampoo"){
            alert(`Tu producto ${producto.nombre} Se guardo,  agrego un stock de de ${shampoo = shampoo + parseInt(producto.stock)} y su precio ${producto.precio}`);
        } else if (producto.categoria == "chupete"){
            alert(`Tu producto ${producto.nombre} Se guardo, agrego un stock de ${chupete = chupete + parseInt(producto.stock)}  y su precio ${producto.precio}`);
        } else if (producto.categoria == "apositos"){
            alert(`Tu producto ${producto.nombre} Se guardo, agrego un stock de ${apositos = apositos + parseInt(producto.stock)}  y su precio ${producto.precio}`);
        } else if (producto.categoria == "mamadera"){
            alert(`Tu producto ${producto.nombre} Se guardo, agrego un stock de ${mamadera = mamadera + parseInt(producto.stock)}  y su precio ${producto.precio}`);
        } else {
            console.log(" no entendi que quiso poner")
        }
        agregarProductos = prompt("Desea seguir agregando productos? Indique 'si' o 'no'.");     
    };


//filtrado por precio
const filtraPorPrecio = panialeraBeMom.filter(producto => producto.precio > 600);
console.log(filtraPorPrecio)


//Busqueda 
const busqueda = panialeraBeMom.find(producto => producto.categoria == "pañales");
console.log(busqueda);