let BD = {buscar_usuario,crear_usuario,eliminar_usuario,mostrar_usuarios,email_existe,corregir_nombre} = require("./Base_Datos");
let input = require('readline');

let rl = input.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function Opcion_usuario(opcion) {
  switch(opcion) {
    case "1":
          rl.question("ingrese un nombre\n", (nombre) => {
            rl.question("Ingrese un email\n", (email) => {
              rl.question("Ingrese telefono\n", (telefono) => {
                crear_usuario(nombre, email, telefono);
                rl.close();
              });
            });
          });     

      break;

    case "2":
        await mostrar_usuarios();
        rl.close();
        break;

    case "3":
      rl.question("ingrese un telefono\n", (telefono) => {
        buscar_usuario(telefono.toString());
        rl.close();
      });
        break;

    case "4":
      rl.question("ingrese un telefono\n", (telefono) => {
        eliminar_usuario(telefono.toString());
        rl.close();
      });
        break;

    case "5":
      rl.question("ingrese un telefono\n", (telefono) => {
        corregir_nombre(telefono.toString());
        rl.close();
      });
        break;
      
    case "6":
      rl.question("ingrese un email\n", (email) => {
        email_existe(email);
        rl.close();
      });
        break;

    case "7":
        console.log("Nos vemos");
        rl.close();
        break;

    default:
      console.log("Opción no válida");
  }
}

function main() {
  let operacion;
    rl.question(
      "Ingrese una opción:\n" +
        "1. Agregar usuario\n" +
        "2. Listar usuarios\n" +
        "3. Buscar usuario\n" +
        "4. Eliminar usuario\n" +
        "5. Editar usuario\n" +
        "6. Verificar si Email existe\n" +
        "7. Salir\n",
      (operacion) => {
        Opcion_usuario(operacion);
      }
    );    
    Opcion_usuario()
}

main();