var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("../Model/mongo");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users")
    .get(function(req,res){})
    .post(function(req,res){});

router.route("/users/:id")
    .get(function(req,res){})
    .put(function(req,res){})
    .delete(function(req,res){
        var response = {};

        mongoOp.findById(req.params.id,function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {

                mongoOp.remove({_id : req.params.id},function(err){
                    if(err) {
                        response = {"error" : true,"message" : "Error deleting data"};
                    } else {
                        response = {"error" : true,"message" :+req.params.id+"is deleted"};
                    }
                    res.json(response);
                });
            }
        });
    })

app.use('/',router);

app.listen(8081);
console.log("Listening to PORT 8081");