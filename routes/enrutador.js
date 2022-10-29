const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/producto')
const mongoose = require('../config/conection');
const Usuario = require('../models/usuario');
const { render } = require('ejs');


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

router.get('/formularioUsuario', (req, res) => {
    res.render('pages/registrarUsuario');
   
});


router.post('/registrarUsuario',async(req,res,next)=>{
   
    const usuariodb= new Usuario({
      correo : req.body.Correo,
      contrasena: req.body.Contrasena,
      rol: req.body.rol,
      habilitado: true

   })
   await usuariodb.save()
   console.log(req.body.Correo)
   res.render('pages/index')
});

router.get('/enviarcorreo', require ('../models/enviocorreo').sendEmail)

router.get('/IniciarSesion', (req, res) => {
    res.render('pages/login');
   
});

router.post('/IniciarSesion',async(req,res,next)=>{
    const body = req.body
    const correo = body.Correo
    const pass = body.Contrasena
    const user = await Usuario.findOne({correo:correo})
    if(!user){
        res.render('pages/error')
    }
    const checkPassword = await encrypt.compare(Contrasena,Correo.Contrasena)

    if(checkPassword){
        res.cookie("correo",correo);
        res.cookie("rol",user.rol)
        res.render("pages/login",{
            "Correo":correo,
            "Rol":user.rol
        })
    }
    if (!checkPassword){
        res.render('pages/error')
    }
});

module.exports = router;