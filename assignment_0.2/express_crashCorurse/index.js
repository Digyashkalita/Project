const express = require('express')
const path = require('path')
//const url = require('url')
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars');
const members = require("./Members");

const app = express();



//Init middleware
//app.use(logger)


//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Homepage route
app.get('/', (req, res)=> res.render('index',{
    title: 'Member app',
    members
}));


//members api routes
app.use('/api/members', require('./routes/api/members'))


//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>console.log(`Server started on port ${PORT}`));
