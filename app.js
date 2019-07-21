// ============
// Libraries
// ============
const express = require("express");
const app     = express();
const bodyParser =require("body-parser");

// ============
// JS Files
// ============
var todoRoutes = require("./routes/todos");

// ============
// Preparations
// ============
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