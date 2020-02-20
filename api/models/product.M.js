const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ProductSchema = new Schema({
    name: {
        type: String,
        Require: 'Please enter name'
    },
    price: {
        type: Number,
        Require: 'Please enter price'
    },
    description: {
        type: String,
        Require: 'Please enter description'
    }
})

module.exports = mongoose.model('Products', ProductSchema)