var mysql = require("mysql2")
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
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
