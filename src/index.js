const http = require('http');
const path = require('path');
const express= require('express');
const socketio = require('socket.io');
const app=express();

const server=http.createServer(app);
const io = socketio.listen(server);
io.on('connection',socket =>{
    console.log('new user connected');
})
app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000,()=>{
    console.log('server on puerto 3000');
});