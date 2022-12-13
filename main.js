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



/*---------------------------------OBJETOS - METODOS CONSTRUCTIVOS--------------------------------*/



class Persona{
    constructor(nombre, edad, calle) {
    this.nombre = prompt("Indicar su nombre y apellido");
    this.edad = parseInt(prompt("Indicar su edad"));
    this.calle = parseInt(prompt("Indicar su domicilio"));
    this.documento = parseInt(prompt("Ingrese su número de documento"));
    bebé: {
        this.nombreApellidoBebé = prompt("Ingrese nombre y apellido del bebé:");
        this.género = prompt("Ingrese género del bebé. Indicando femenino o masculino");
        this.documento = parseInt(prompt("Ingrese numero de documento del bebé:"));
        }
    }
    hablar(){
    console.log("Hola, soy "+ this.nombre);
    console.log("Tengo"+" "+this.edad +" "+ "años.");
    console.log("Vivo en"+" "+this.calle);
    console.log("Padre de"+" "+this.nombreApellidoBebé);
    }
}
    const persona1 = new Persona(this.nombre, this.edad, this.domicilio);
    persona1.hablar();


/*---------------------------------ARRAYS--------------------------------*/

