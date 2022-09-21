var conexion = require('../config/conexion');
var juego = require('../model/usuario');

module.exports={

    getUser:function(req,res) {
        juego.obtener(conexion, function (err, datos){
            console.log(datos)            
             res.json(datos);
        })
        
    },
    postUser:function(req,res) {
        console.log(req.body)
        juego.crear(conexion, req.body, function (err, respuesta){
            console.log(respuesta)            
            res.json(respuesta);
        })        
        
    },
    deleteUser:function(req,res) {
        console.log(req.body)
        juego.borrar(conexion, req.body, function (err, respuesta){
            console.log(respuesta)            
            res.json(respuesta);
        })        
        
    },
    updateUser:function(req,res) {
        console.log(req.body)
        juego.actualizar(conexion, req.body, function (err, respuesta){
            console.log(respuesta)             
            res.json(respuesta);
        })        
        
    }
}

