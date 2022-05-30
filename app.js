const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 6,
    review: "heathy fruit"
});
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 9,
    review: "great fruit"
});
const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "great fruit"
});
const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "great fruit"
});

Fruit.insertMany([apple, kiwi, orange, banana], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB.");

    }
});



const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 16
});

//person.save();


//find documents
const findDocuments = function(db, callback) {
    //Get the documents collection or create one
    const collection = db.collection("documents");
    //find some documents
    collection.find({}).toArray(
        function(err, result) {
            assert.equal(err, null);

            console.log("Found the following: ");
            console.log(result);
            callback(result);
        });


}