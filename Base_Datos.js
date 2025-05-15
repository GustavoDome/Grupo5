const fs = require('fs');

const BD = JSON.parse(fs.readFileSync('Usuarios.json', 'utf-8'));
console.log(data);

function buscar_usuario(nombre) {
    let nombre_modificado = nombre.toLowerCase().trim();
    let usuario = BD.Usuarios.find(Usuarios => Usuarios.nombre===nombre_modificado)

    if (usuario) {
    return `Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono}`;
    } else {
    return "Usuario no encontrado.";
    }
}

function crear_usuario(nombre, email, telefono) {
    nombre = corregir_nombre(nombre);

    if (email_existe(email)) {
        console.log("El email ya está registrado.");
        return;
    }

    let nuevoUsuario = { nombre, email, telefono };
    BD.Usuarios.push(nuevoUsuario);
    fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
    return "Usuario agregado correctamente"
}

function eliminar_usuaro(nombre) {
    let nombre_modificado = nombre.toLowerCase().trim();
    let index = BD.Usuarios.findIndex(usuario => usuario.nombre.toLowerCase().trim() === nombreNormalizado);

    if (index !== -1) {
        BD.Usuarios.splice(index, 1);
        fs.writeFileSync('Usuarios.json', JSON.stringify(BD, null, 2));
    } else {
        console.log("Usuario no encontrado.");
    }
}

function mostrar_usuarios() {
    BD.Usuarios.map(usuario => {
        console.log(`Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono}`);
    });
}

function email_existe(email) {
    return BD.Usuarios.some(usuario => usuario.email === email);
}

function corregir_nombre(nombre) {
    return nombre.trim().replace(/\s+/g, " ");
}
