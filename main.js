let BD = {buscar_usuario,crear_usuario,eliminar_usuario,mostrar_usuarios,email_existe,corregir_nombre} = require("./Base_Datos");
const { openAsBlob } = require("fs");
let input = require('readline');

let rl = input.createInterface({
  input: process.stdin,
  output: process.stdout,
});

    
function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

// Función recursiva real
async function main() {
  const operacion = await preguntar(
    "\nIngrese una opción:\n" +
      "1. Agregar usuario\n" +
      "2. Listar usuarios\n" +
      "3. Buscar usuario\n" +
      "4. Eliminar usuario\n" +
      "5. Editar usuario\n" +
      "6. Verificar si el email existe\n" +
      "7. Salir\n"
  );

  switch (operacion) {
    case "1": {
      const nombre = await preguntar("Ingrese un nombre\n");
      const email = await preguntar("Ingrese un email\n");
      const telefono = await preguntar("Ingrese un teléfono\n");
      crear_usuario(nombre, email, telefono);
      break;
    }
    case "2":
      await mostrar_usuarios();
      break;

    case "3": {
      const telefono = await preguntar("Ingrese un teléfono\n");
      buscar_usuario(telefono);
      break;
    }
    case "4": {
      const telefono = await preguntar("Ingrese un teléfono\n");
      eliminar_usuario(telefono);
      break;
    }
    case "5": {
      const telefono = await preguntar("Ingrese un teléfono\n");
      corregir_nombre(telefono);
      break;
    }
    case "6": {
      const email = await preguntar("Ingrese un email\n");
      email_existe(email);
      break;
    }
    case "7":
      console.log("Saliendo del sistema...");
      rl.close();
      return; // Termina la recursión
    default:
      console.log("Opción no válida");
  }

  // Llamada recursiva real
  await main();
}

// Inicia el programa
main();