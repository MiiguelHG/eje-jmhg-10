//Definiciones
const express = require('express')
const app = express();
const port = process.env.port || 3000;

//Configuracion
app.use(express.static('public'));

app.get('*', (req,res) =>{
    res.send('En teoria 404.html');
}); 

//Corriendo el proceso del servidor
app.listen(port, () =>{
    console.log('Servidor corriendo en el puerto: ', port);
});