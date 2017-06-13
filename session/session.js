var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(session({secret: 'Hiii'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/',function(req,res){
    sess = req.session;
//Session set when user Request our app via URL
    if(sess.email) {
        res.redirect('/admin');
    }
    else {
        res.render('session.html');
    }
});

app.post('/login',function(req,res){
    sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
    sess.email=req.body.email;
    res.end('done');
});

app.get('/admin',function(req,res){
    sess = req.session;
    if(sess.email) {
        res.write('<h1>Hello '+sess.email+'</h1>');
        res.end('<a href="+">Logout</a>');
    } else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href="+">Login</a>');
    }
});

app.get('/logout',function(req,res){
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });

});
app.listen(8088,function(){
    console.log("App Started on PORT 8088");
});