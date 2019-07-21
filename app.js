// ============
// Libraries
// ============
const express = require("express");
const app     = express();
const bodyParser =require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// ============
// JS Files
// ============
var todoRoutes = require("./routes/todos");
// ============
// Preparations
// ============
mongoose.connect('mongodb+srv://xden2331:XDen2331@cluster0-z17gi.mongodb.net/todos?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(console.log("CONNECTED TO DB"))
.catch(err => {console.log(err)});

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use('/todos', todoRoutes);

// ============
// ROUTES
// ============
// The landing page
app.get('/', (req, res) => {
    res.render('landing');
});

app.listen(process.env.PORT, process.env.IP, () => {
   console.log(`The todo-list server is listening onto ${process.env.PORT} on ${process.env.IP}.`); 
});