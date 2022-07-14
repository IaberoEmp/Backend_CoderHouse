//Clase 7 servidor express avanzado
app.get('/users',(req,res)=>{
    //Cálculo para obtener a los usuarios y mostrarlos
})
app.post('/users',(req,res)=>{
    //Aquí meto lógica para CREAR un usuario, y no mostrar nada
})
app.put('/users',(req,res)=>{
    //Meto lógica para actualizar al usuario
});
app.delete('/users',(req,res)=>{
    //Meto lógica para eliminar usuarios
    req.query;
})

//-------------------------------

import express from 'express';

const app = express();
const server =app.listen(8080,()=>console.log("Listening on 8080"))

let users = [
    "maria",
    "Manuel",
    "Mauricio",
    "papa"
]
app.get('/users',(req,res)=>{
    //Trae todos los users
    res.send({users})
})

app.get('/users/:userId',(req,res)=>{
    console.log(req.params);
    let id = req.params.userId
    res.send(users[id-1])
})

//-------------------------------

import express from 'express';

const app = express();
const server =app.listen(8080,()=>console.log("Listening on 8080"))

const sentence = "Hola mundo cómo están";

app.get('/api/frase',(req,res)=>{
    res.send({sentence})
})

app.get('/api/letras/:num',(req,res)=>{
    if(isNaN(req.params.num)) return res.status(400).send({error:"El valor no es numérico"});
    if(parseInt(req.params.num)<1||parseInt(req.params.num)>sentence.length) return res.status(404).send("No hay letra con este índice");
    let num = parseInt(req.params.num);
    res.send({letter:sentence.charAt(num-1)})
})

//-------------------------------


