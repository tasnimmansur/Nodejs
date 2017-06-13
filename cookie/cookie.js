var express = require('express')
    , app = module.exports = express();

app.use(express.cookieParser('Cookie'));

app.use(express.bodyParser());

app.get('/', function(req, res){
    if (req.cookies.remember) {
        res.send('Remembered. Click to <a href="/forget">forget</a>.');
    } else {
        res.send('<form method="post"><p>Check to <label>'
            + '<input type="checkbox" name="remember"/> remember</label> '
            + '<input type="submit" value="Submit"/>.</p></form>');
    }
});

app.get('/forget', function(req, res){
    res.clearCookie('remember');
    res.redirect('back');
});

app.post('/', function(req, res){
    var minute = 60 * 1000;
    if (req.body.remember) res.cookie('remember', 1, { maxAge: minute });
    res.redirect('back');
});


app.listen(8078);
console.log('Express started on port %d', 8078);
