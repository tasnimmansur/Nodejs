var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: "Surat" };
    var newvalues = { name: "CKP", address: "Surat" };
    db.collection("customers").update(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record updated");
        db.close();
    });
});