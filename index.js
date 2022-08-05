const express      = require("express");
const app          = express();
const mongoose     = require("mongoose");
const bodyParser   = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/keys")

const { User } = require("./models/user");


mongoose.connect(config.mongoURI, 
{useNewUrlParser: true }).then(() => console.log("Zion is connected."))
                         .catch(err => console.error(err));



app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/", (req, res) => {

    res.json({"hello~": "Hit ~~ djhfslkjfhgfhj"})
})

app.post("/api/users/register", (req, res) => {
        const user = new User(req.body)

        user.save((err, userData) => {
            if(err) return res.json ({ sucess: false, err})
            return res.status(200)
        })

})


app.listen(9000);
