const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;
//mongoURI = "mongodb+srv://digyash:digyash@shoppinglist.9s7ep.mongodb.net/Mern_Shopping?retryWrites=true&w=majority"

//Connect to mongo
mongoose
.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{ console.log("database connected...")})
.catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

