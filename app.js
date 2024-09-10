require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routeUsers = require('./routes/routeUsers');


const app = express();
app.use(express.json());
app.use("/users",routeUsers);


mongoose.connect(process.env.CONN);
const db = mongoose.connection;
db.once('open', () => console.log("Conectado a DB: "+process.env.CONN));






app.listen(process.env.PORT, ()=>{
    console.log("Server andando en ",process.env.PORT);
});