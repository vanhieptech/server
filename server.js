const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
cors = require('cors');

const uri = "mongodb+srv://dbUserVH:dbuservh@cluster0-syx0j.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api/product', require("./api/routes/product.route"));


app.listen(port, () => {
    console.log(`Server is listening at PORT: ${port}`)
});