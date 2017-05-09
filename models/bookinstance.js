var moment = require('moment');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = Schema({
	book: {type: Schema.ObjectId, ref: 'Book', required: true}, // reference to associated book
	imprint: {type: String, required: true},
	status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
	due_back: {type: Date, default: Date.now},
});

BookInstanceSchema
.virtual('due_back_formatted')
.get(function(){
	return moment(this.due_back).format('MMMM Do, YYYY');
});

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function(){
	return '/catalog/bookinstance/' + this._id;
});

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);