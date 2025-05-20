const fs = require('fs');
const BD = JSON.parse(fs.readFileSync('Usuarios.json', 'utf-8'));

function buscar_usuario(telefono) {
    let usuario = BD.Usuarios.find(usuario => usuario.telefono === telefono);
    if (usuario) {
        console.log(`Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono}`);
    } else {
        console.log("Usuario no encontrado.");
    }
}

function crear_usuario(nombre, email, telefono) {
    if (email_existe(email)) {
        console.log("El usuario ya está registrado.");
    }
    console.log(nombre, email, telefono);
    let nuevoUsuario = { nombre, email, telefono };
    BD.Usuarios.push(nuevoUsuario);
    fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
    console.log("Usuario agregado correctamente");
}

function eliminar_usuario(telefono) {
    let index = BD.Usuarios.findIndex(usuario => usuario.telefono === telefono);
    if (index !== -1) {
        BD.Usuarios.splice(index, 1);
        fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
        console.log("Usuario eliminado.");
    } else {
        console.log("Usuario no encontrado.");
    }
}

function mostrar_usuarios() {
    return BD.Usuarios.forEach(usuario => {console.log(`Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono}\n-------------------------------------------------------------------------------------------`);});
}

function email_existe(email) {
    email = BD.Usuarios.some((usuario) => usuario.email === email);
    if(email) 
    {
        console.log("email existe")
    } 
    else 
    {
        console.log("email no existe")
    }
}

function corregir_nombre(telefono) {
    let usuario = BD.Usuarios.find(usuario => usuario.telefono === telefono);
    if (usuario) {
        usuario.nombre = usuario.nombre.trim().replace(/\s+/g, " ");
        fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
        console.log("Nombre corregido");
    } else {
        console.log("Usuario no encontrado.");
    }
}

module.exports = {buscar_usuario,crear_usuario,eliminar_usuario,mostrar_usuarios,email_existe,corregir_nombre};
