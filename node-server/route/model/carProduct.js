//Import the mongoose module
const mongoose = require('mongoose');
//Set up default mongoose connection url
var url = "mongodb://127.0.0.1/myCarDB";

//连接数据库
mongoose.connect(url, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once('open', (callback) => {
    console.log('MongoDB连接成功！！')
})

//Define a schema
var Schema = mongoose.Schema;

var CarModelSchema = new Schema({
    id: Number,
    name: String,
    ctime:Date
}, { collection: "Cars" });

//Export function to create "SomeModel" model class
module.exports = mongoose.model('carModel', CarModelSchema);