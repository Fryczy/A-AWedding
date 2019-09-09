var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser.json())

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    maxDonators: Number,
    donators: []
});

var Item = mongoose.model('Item', itemSchema, 'Item');
mongoose.connect('mongodb://localhost:27017/wedding');

app.get('/get_gifts', function(req, res) {
    Item.find(function(err, results) {
        var gifts = [];
        for(let index = 0; index < results.length; index++) {
            result = results[index];
            gifts.push(
                {
                    name: result['name'],
                    numOfDonators: result['donators'].length,
                    maxNumOfDonators: result['maxDonators']
                }
            );
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
        res.json(gifts);
    });
});

app.post('/add_donator', function(req, res) {
    var name = req.body['name'];
    var email = req.body['email'];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    Item.find({name: name}, function(err, result) {
        if(result.length == 0) {
            res.status(400);
            res.json({message: 'A megadott ajándék nem létezik!'});
        }
        else {
            var item = result[0];
            if(item['donators'].includes(email)) {
                res.status(400);
                res.json({message: 'Már adakozott erre az ajándékra ezzel az email címmel!'});
            }
            else if(item['maxDonators'] <= item['donators'].length){
                res.status(400);
                res.json({message: 'Az ajándékhoz összegyűltek már az adományozók!'});
            }
            else {
                item['donators'].push(email);
                item.save();

                res.status(200);
                res.json({message: 'Köszönjük!'});
            }
        }
    });
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});