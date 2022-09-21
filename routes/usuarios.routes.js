var express = require('express');
var router = express.Router();

const usuariosController = require("../controllers/usuario.controller")

/* GET home page. */
router.get('/', usuariosController.getUser);
router.post('/post_user', usuariosController.postUser);
router.delete('/delete_user', usuariosController.deleteUser);
router.put('/update_user', usuariosController.updateUser);

module.exports = router;