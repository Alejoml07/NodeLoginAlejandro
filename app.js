const express = require('express');
const app = express();
const PORT = process.env.PORT || 9004;
const path = require('path')
const rta = require('./routes/enrutador');
/* const path = require('path'); */
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/',rta);

app.listen(PORT,()=>{
    console.log("Servidor Iniciado:"+`${PORT}`)
});
