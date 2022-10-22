const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema ({

    referencia: {type : String},
    nombre: {type : String},
    descripcion: {type : String},
    precio: {type : Number},
    stock: {type : Number},
    
});

const Producto = mongoose.model("Productosuario" , productoSchema);

module.exports = Producto;