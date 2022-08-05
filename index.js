const express  = require("express");
const app      = express();
const mongoose = require("mongoose");

mongoose.connect
("mongodb+srv://hoshikira:pMhFEkFOXildDMU3@react-blog.r21ox5j.mongodb.net/?retryWrites=true&w=majority", 
{useNewUrlParser: true }).then(() => console.log("Zion is connected."))
                         .catch(err => console.error(err));



                         app.get('/', function (req, res) {
    res.send('Welcome home, neokage.')
});



app.listen(9000);
