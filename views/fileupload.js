var express = require('express'); //to require express.js
var multer = require('multer'),  //to require multer for uploading photos
    bodyParser = require('body-parser'), //to require body-parser to grab json form data
    path = require('path');

var upload = multer({ dest: '../Api/tmp/' }) //giving upload a destination directory

var app = express();  //to use express
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));  //to use style.css
app.set('view engine', 'ejs'); //to use ejs as template language
// app.use(bodyParser.urlencoded({ extended: false })); //to use body parser

app.get('/', function(req, res){  //using express for routing and printing out content
    res.render('index');  //render it in html. In ejs, display what we want to display
})

app.post('/', multer({ dest: '../Api/tmp/'}).single('upl'), function(req,res){
    console.log(req.body); //form fields
    console.log(req.file); //form files
    res.status(204).end();
});

app.listen(8086,function(){  //using express to load the server
    console.log('Port 8086!');
})