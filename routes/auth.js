var router = require('express').Router();

// Login logic
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.send('SIGN UP PAGE');
});

router.get('/logout', (req, res) => {
  res.send('LOG OUT PAGE');
});

module.exports = router;
