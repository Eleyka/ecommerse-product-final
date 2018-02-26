/*sk_test_7vE9uMvM8qKF1IQYjOXP7soh*/
var express = require("express");
var stripe = require("stripe")("sk_test_eCVvE6HZEdffZwqtq4Wsl9Gw");
var hbs = require("hbs");
var bodyParser = require("body-parser");

var app = express();

app.set('view engine','hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.render('index', {

    });
})


app.get('/paysuccess', function(req, res){
    res.render('paysuccess',{

    });
});

/*servidoor */

app.listen(3000, function(){
        console.log("Stripe funca");
});