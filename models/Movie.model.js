// retrieve le serveur mongoose
const mongoose = require('mongoose');


// Definition du schema MOVIE
const schema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: {
        type: String,
        default: '#',
    },
    description: String,
    showtimes: [String]

}, {
    timestamps: true
})

// var model Movie
const Movie = mongoose.model('Movie', schema)

// export modèle dans les autres pages
module.exports = Movie