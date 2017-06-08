var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = [
        { name: 'Lanet', address: 'Surat'},
        { name: 'I3', address: 'Bharuch'}
    ];
    db.collection("customers").insert(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        db.close();
    });
});