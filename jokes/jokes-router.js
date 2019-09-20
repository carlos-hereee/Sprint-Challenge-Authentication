const axios = require('axios');

const authenticate = require('../auth/authenticate-middleware.js');
const Users = require('./users-model.js');

const router = require('express').Router();

router.get('/',authenticate, (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };
  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json({message: `server 500 error`})
    // });

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
});

module.exports = router;
