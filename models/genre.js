var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({
	name: {type: String, required: true}
});

GenreSchema
.virtual('url')
.get(function(){
	return '/catalog/genre/' + this._id;
});

GenreSchema
.virtual('genre_name')
.get(function(){
	return this.genre_name;
});

// Export the model
module.exports = mongoose.model('Genre', GenreSchema);