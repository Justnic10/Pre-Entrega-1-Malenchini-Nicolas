let savedPass = 'nicolas';

function login() {

    let ingresar = false;



    for (let i = 2; i >= 0; i--) {
        let userPass = prompt('Ingresa tu contraseña. Tienes ' + (i + 1) + ' intentos');
        if (userPass === savedPass) {
            alert('Ingreso exitoso. Bienvenido/a');
            ingresar = true;
            break;
        } else {
            alert('Error. Tienes ' + i + ' intento/s.');
        }


    }

    return ingresar;
}


if (login()) {
    let carritoCompra = prompt('Selecciona el producto que necesites \n1- Producto 1 \n2- Producto 2 \n3- Producto 3 \n4- Producto 4 \n5- Finalizar compra');
    let producto1 = 0;
    let producto2 = 0;
    let producto3 = 0;
    let producto4 = 0;

    while (carritoCompra != '5') {
        switch (carritoCompra) {
            case '1':
                producto1 = parseInt(prompt('Elegi la cantidad de unidades'));
                alert('La cantidad del producto 1 es ' + producto1 + ' unidades');
                break;
            case '2':
                producto2 = parseInt(prompt('Elegi la cantidad de unidades'));
                alert('La cantidad del producto 2 es ' + producto2 + ' unidades');
                break;
            case '3':
                producto3 = parseInt(prompt('Elegi la cantidad de unidades'));
                alert('La cantidad del producto 3 es ' + producto3 + ' unidades');
                break;
            case '4':
                producto4 = parseInt(prompt('Elegi la cantidad de unidades'));
                alert('La cantidad del producto 4 es ' + producto4 + ' unidades');
                break;
            default:
                alert('La opcion que seleccionaste es invalida');
                break;
        }


        carritoCompra = prompt('Selecciona el producto que necesites \n1- Producto 1 \n2- Producto 2 \n3- Producto 3 \n4- Producto 4 \n5- Finalizar compra');

    }


    if (producto1 > 0) {
        alert('compraste ' + producto1 + ' unidades del producto 1');
    }

    if (producto2 > 0) {
        alert('compraste ' + producto2 + ' unidades del producto 2');
    }

    if (producto3 > 0) {
        alert('compraste ' + producto3 + ' unidades del producto 3');
    }

    if (producto4 > 0) {
        alert('compraste ' + producto4 + ' unidades del producto 4');
    }


} else {
    alert('Pedi una renovacion de contraseña');
}

alert('Gracias por tu visita!');
