const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({

    idUsuario:{type : Number},
    User: {type : String},
    Password: {type : Number},
    Rol: {type : String},
    Habilitado: {type : Boolean}
    


});

const Usuario = mongoose.model("Usuario" , usuarioSchema);

module.exports = Usuario;