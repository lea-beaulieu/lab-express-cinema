const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// routes/index.js

router.get('/movies', (req, res) => {
    Movie.find()
      // -> allTheBooksFromDB is a placeholder, it can be any word
      // |
      .then(allTheMoviesFromDB => console.log('Retrieved movies from DB:', allTheMoviesFromDB))
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
  
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });
  



module.exports = router;
