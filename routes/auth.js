const passport = require('passport');
var router = require('express').Router();
var User = require('../models/user');

// Login logic
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/todos',
  failureRedirect: '/login'
}), (req, res) => {});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res) => {
  User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
    if(err){
      console.log(err);
      res.redirect('/signup');
    }else{
      passport.authenticate('local')(req, res, () => {
        res.redirect('/todos');
      });
    }
  });
});

// logout
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;
