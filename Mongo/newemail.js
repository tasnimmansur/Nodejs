var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "lanetteam.tasnimm@gmail.com",
        pass: "lanetteam1"
    }
});

app.get('/',function(req,res){
    res.sendfile('mail.html');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

app.listen(8089,function(){
    console.log("Express Started on Port 8089");
});