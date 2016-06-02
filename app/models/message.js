var mongoose = require('mongoose');
module.exports = mongoose.model('message', {
	id  : {type : String},
    de  : {type : String},
    destination : {type : String},
    content : {type : String}

});