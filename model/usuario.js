module.exports={
    obtener:function(conexion, funcion) {
        conexion.query("SELECT * FROM users", funcion);
    },
    crear:function(conexion, datos,funcion) {
        conexion.query(" INSERT INTO users (nombre, last_name, role) VALUES ('"+datos["nombre"]+"','"+datos["last_name"]+datos["role"], funcion);
    },
    borrar:function(conexion, datos,funcion) {
        conexion.query(" DELETE FROM users WHERE idusers="+datos['idusers']+";", funcion);
    },
    actualizar:function(conexion, datos,funcion) {
        conexion.query(" UPDATE users SET name='"+datos["name"]+"', last_name='"+datos["last_name"]+"', role='"+datos["role"]+"' WHERE idusers="+datos["idusers"]+";'", funcion);
    }
}