const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/producto')
const mongoose = require('../config/conection')


router.get('/about', (req,res)=>{
    res.render('pages/index');
})


router.get('/inicio', async (req, res) => {
    res.render('pages/index');
   
});

router.get('/formularioProducto', (req, res) => {
     res.render('pages/registrarProducto');
    
 });


router.post('/registrarProducto',async(req,res,next)=>{
    
     const productodb= new modeloProducto({
       referencia : req.body.Referencia,
       nombre: req.body.Nombre,
       descripcion: req.body.Descripcion,
       precio: req.body.Precio,
       stock: req.body.Stock,
       habilitado: true

    })
    await productodb.save()
    console.log(req.body.Nombre)
    res.render('pages/index')
});



module.exports = router;