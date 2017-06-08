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

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP such as POST,GET etc
//Then use route() to remove redundant code.

router.route("/users")
    .get(function(req,res){})
    .post(function(req,res){});

router.route("/users/:id")
    .get(function(req,res){
        var response = {};
        mongoOp.findById(req.params.id,function(err,data){
            // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })

app.use('/',router);

app.listen(8081);
console.log("Listening to PORT 8081");