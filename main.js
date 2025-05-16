let BD = {buscar_usuario,crear_usuario,eliminar_usuario,mostrar_usaurios,email_existe,corregir_nombre} = require("./Base_Datos");
console.log(
  "Ingrese una opción:\n" +
  "1. Agregar usuario\n" +
  "2. Listar usuarios\n" +
  "3. Buscar usuario\n" +
  "4. Eliminar usuario\n" +
  "5. Editar usuario\n" +
  "6. Verificar si Email existe\n" +
  "7. Salir"
);

async function Opcion_usuario(opcion) {
  switch(opcion) {
    case "1":
      crear_usuario();
      break;

    case "2":
      mostrar_usaurios();
      break;

    case "3":
      buscar_usuario();
      break;

    case "4":
      eliminar_usuario();
      break;

    case "5":
      corregir_nombre();
      break;
      
    case "6":
      email_existe();
      break;

    case "7":
      console.log("Nos vemos");
      break;

    default:
      console.log("Opción no válida");
  }
}

