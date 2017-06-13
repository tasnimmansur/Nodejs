var express = require('express');
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

app.use(bodyParser());
app.use(cookieParser());

app.use(session({
    cookie: { maxAge: 1000*60*2 } ,
    secret: "session secret" ,
    store:new MongoStore({
        db: 'mydb',
        host: 'localhost',
        port: 8090,
        url : 'mongodb://localhost/mydb',
        collection: 'session',
        auto_reconnect:true
    })
}));

app.get('/', function(req, res){
    res.sendfile('./mongosession.html');
});
app.post('/',function(req,res){
    req.session.name=req.body.name;
    res.redirect('/info');
});
app.get('/info',function(req,res){
    res.send('<div style="color:#ff5ec7;font-size: 30px";>'+req.session.name+'</div>'+'<div><a href="/">back</a></div>');
});

app.listen(8090);
console.log("connected");