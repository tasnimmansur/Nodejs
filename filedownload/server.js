var express = require('express')
    , app = module.exports = express();

app.get('/', function(req, res){
    res.send('<ul>'
        + '<li>Download <a href="/amazing.txt">amazing.txt</a>.</li>'
        + '<li>Download <a href="/missing.txt">missing.txt</a>.</li>'
        + '</ul>');
});

app.get('/:file(*)', function(req, res, next){
    var file = req.params.file
        , path = __dirname + '/files/' + file;

    res.download(path);
});

app.use(function(err, req, res, next){
    if (404 == err.status) {
        res.statusCode = 404;
        res.send('Cant find that file, sorry!');
    } else {
        next(err);
    }
});

if (!module.parent) {
    app.listen(8009);
    console.log('Express started on port %d', 8009);
}
