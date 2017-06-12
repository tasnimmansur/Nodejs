var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("../model/mongo");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users")
    .get(function(req,res){})
    .post(function(req,res){
        var db = new mongoOp();
        var response = {};

        db.userEmail = req.body.email;

        db.userPassword =  require('crypto')
            .createHash('sha1')
            .update(req.body.password)
            .digest('base64');
        db.save(function(err){

            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });

app.use('/',router);

app.listen(8081);
console.log("Listening to PORT 8081");