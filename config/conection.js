const mongoose = require('mongoose');

const url = `mongodb+srv://Alejo07:Alejo1000655232@adsi2364482.ujjbxg0.mongodb.net/AplicacionPOS?retryWrites=true&w=majority`

const connectionsParams ={
    useNewUrlParser: true,
    useUniFiedTopology: true
}
mongoose.connect(url,connectionsParams)
        .then(()=>{
            console.log('se conecto a la base de datos');
        })
        .catch(()=>{
            console.error(`no se puedo conectar a ña base de datos. n${err}`);
        })

    module.exports = mongoose