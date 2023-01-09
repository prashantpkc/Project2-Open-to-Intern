const express = require("express");

const route = require("./routes/route");

const bodyParser = require('body-parser')
const {default:mongoose}=require('mongoose')
const express = require('express')
const app=express();
app.use(express.json())
//app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://devendra_29:I28Cx63EjuXQjHtQ@devendra.ytysqub.mongodb.net/", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/',route)


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});