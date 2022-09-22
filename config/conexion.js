var mysql = require("mysql2")
var con = mysql.createConnection({
    host:'3.85.14.254',
    user:'kevinalvarado',
    password:'nocewe',
    database:'db_crude'
}
);


con.connect(
    (err)=>{
        if(!err){
            console.log('Conexión a base de datos correcta')
        }else{
            console.log('Error de conexion')
            console.log(err)
        }
    }
);
module.exports = con;
