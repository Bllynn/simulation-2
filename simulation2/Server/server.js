const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const massive=require('massive');
require('dotenv').config();
app.use(bodyParser.json());
const controller=require('./controller');

app.get('/api/houses',controller.getAllHouses)

app.post('/api/houses',controller.newHouse)
app.delete('/api/houses',contoller.delete)














massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>console.log(err));

const port = process.env.SERVER_PORT || 4000
app.listen(port,()=>{console.log(`Server is listening on port ${port}`)})