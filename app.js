// ============
// Libraries
// ============
const express = require("express");
const app     = express();
const bodyParser =require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require('passport');
const LocalStrategy	= require("passport-local");

// ============
// JS Files
// ============
var todoRoutes = require("./routes/todos");
var authRoutes = require('./routes/auth');
var seedDB = require('./seed');
var User = require('./models/user');

// ============
// Preparations
// ============
mongoose.connect('mongodb+srv://xden2331:XDen2331@cluster0-z17gi.mongodb.net/todos?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(console.log("CONNECTED TO DB"))
.catch(err => {console.log(err)});

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use(require("express-session")({
	secret: "Red Velvet",
	resave: false,
	saveUninitialized: false
}));
passport.use(User.createStrategy());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(express.static(__dirname+'/public'));

app.use('/todos', todoRoutes);
app.use(authRoutes);

// ============
// ROUTES
// ============
// The landing page
app.get('/', (req, res) => {
    res.render('landing');
});

app.listen(8080, 'localhost', () => {
   console.log(`The todo-list server is listening onto 8080 on localhost.`);
});
