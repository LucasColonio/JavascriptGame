
let cancionesobjetos = [];

function agregarproducto() { }
function mostrarproductos() { }
function buscarproducto() { }
function eliminarproducto() { }






function menutiendaecommerce() {
    let opcion;
    do {
        opcion = prompt(
            "Eliga una opcion: \n" +
            "1- Agregar producto\n" +
            "2- Mostrar lista de productos \n" +
            "3- Buscar producto \n" +
            "4- Eliminar producto \n" +
            "5- Salir"
        );
        switch (opcion) {
            case '1':
                agregarproducto()
                break;
            case '2':
                mostrarproductos()
                break;
            case '3':
                buscarproducto()
                break;
            case '4':   
                eliminarproducto()
                break;
            case '5': alert("Gracias por visitarnos")
                break;

            default: alert("Opcion incorrecta")
        }
    } while (opcion != '5');
}






menutiendaecommerce();


