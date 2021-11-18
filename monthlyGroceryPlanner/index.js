import express from 'express';
import bodyParser from 'body-parser';
import groceryRoutes from './routes/groceries.js'


const server = express();
const PORT = 8888
server.use(bodyParser.json())
server.use("/grocery", groceryRoutes)


var homepage = (req,res)=> res.send('hello')

server.get('/', homepage);
server.listen(PORT);




