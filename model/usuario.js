module.exports={
    obtener:function(conexion, funcion) {
        conexion.query("SELECT * FROM users", funcion);
    },
    crear:function(conexion, datos,funcion) {
        conexion.query(" INSERT INTO users (name, last_name) VALUES ('"+datos["name"]+"', '"+datos["last_name"]+"' ); ", funcion);
        //INSERT INTO users (name, last_name, role) VALUES ("KEVIN","ALVARADO", "ESTUDIANTE")
        //("INSERT INTO users (name, last_name, role) VALUES ('"+datos["name"]+"','"+datos["last_name"]+"','"+datos["role"]+"');'", funcion)
    },
    borrar:function(conexion, datos,funcion) {
        conexion.query(" DELETE FROM users WHERE idusers="+datos['idusers']+";", funcion);
    },
    actualizar:function(conexion, datos,funcion) {
        conexion.query(
            " UPDATE users SET name='"+datos["name"]+"', last_name= '"+datos["last_name"]+"' WHERE idusers = '"+datos['idusers']+"';", funcion);

    }
}