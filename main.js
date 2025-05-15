
// Ejercicio 5: "Gestión de usuarios con manipulación avanzada de strings" (consola)

// Objetivo:
// Crear un sistema que administre usuarios y normalice los datos ingresados, aplicando transformaciones avanzadas de string.

// Listado de pasos:

// Crear la estructura de datos inicial, un array de usuarios con nombre, email y telefono.
// Mostrar un menú interactivo en consola para gestionar usuarios.
// Implementar la función para agregar usuarios, validando emails con match y una expresión regular.
// Implementar la función para listar usuarios, aplicando map para mostrar datos con formato personalizado.
// Implementar la función para buscar usuarios, usando filter y normalizando con toLowerCase.
// Implementar la función para eliminar usuarios, usando splice.
// Agregar una función para corregir nombres, eliminando espacios extra con trim y replace.
// Implementar una función para verificar si un email ya existe, usando some.
// Modularizar el código para mejorar la estructura.
// Analizar los métodos de string aplicados en la manipulación de usuarios.

console.log(
  "Ingrese una opción:\n" +
  "1. Agregar usuario\n" +
  "2. Listar usuarios\n" +
  "3. Buscar usuario\n" +
  "4. Eliminar usuario\n" +
  "5. Editar usuario\n" +
  "6. Salir"
);

async function Opcion_usuario(opcion) {
  switch(opcion) {
    case "1":
      console.log("Agregar usuario");
      break;

    case "2":
      console.log("Listar usuarios");
      break;

    case "3":
      console.log("Buscar usuario");
      break;

    case "4":
      console.log("Eliminar usuario");
      break;

    case "5":
      console.log("Editar usuario");
      break;

    case "6":
      console.log("Salir del sistema");
      break;

    default:
      console.log("Opción no válida");
  }
}

