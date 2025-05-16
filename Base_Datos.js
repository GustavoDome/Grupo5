const fs = require('fs');
const BD = JSON.parse(fs.readFileSync('Usuarios.json', 'utf-8'));

function buscar_usuario(nombre) {
    let nombre_modificado = nombre.toLowerCase().trim();
    let usuario = BD.Usuarios.find(usuario => usuario.nombre.toLowerCase().trim() === nombre_modificado);
    if (usuario) {
        return `Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono}`;
    } else {
        return "Usuario no encontrado.";
    }
}

function crear_usuario(nombre, email, telefono) {
    nombre = corregir_nombre(nombre);
    if (email_existe(email)) {
        return "El usuario ya está registrado.";
    }
    let nuevoUsuario = {nombre, email, telefono};
    BD.Usuarios.push(nuevoUsuario);
    fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
    return "Usuario agregado correctamente"
}

function eliminar_usuario(nombre) {
    let nombre_modificado = nombre.toLowerCase().trim();
    let index = BD.Usuarios.findIndex(usuario => usuario.nombre.toLowerCase().trim() === nombre_modificado);
    if (index !== -1) {
        BD.Usuarios.splice(index, 1);
        fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
        return "Usuario eliminado.";
    } else {
        return "Usuario no encontrado.";
    }
}

function mostrar_usuarios() {
    return BD.Usuarios.forEach(usuario => {console.log(`Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono}\n-------------------------------------------------------------------------------------------`);});
}

function email_existe(email) {
    return BD.Usuarios.some(usuario => usuario.email === email);
}

function corregir_nombre(nombre) {
    let nombre_modificado = nombre.toLowerCase().trim();
    let usuario = BD.Usuarios.find(usuario => usuario.nombre.toLowerCase().trim() === nombre_modificado);

    if (usuario) {
        usuario.nombre = usuario.nombre.trim().replace(/\s+/g, " ");
        fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
        return "Nombre corregido";
    } else {
        return "Usuario no encontrado.";
    }
}

module.exports = {buscar_usuario,crear_usuario,eliminar_usuario,mostrar_usuarios,email_existe,corregir_nombre};
