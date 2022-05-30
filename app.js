const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");


//fruits
//make the fruits schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "I need you name bruh!"]

    },
    rating: {
        type: Number,
        min: [1, "That too brutal! min: 1"],
        max: [10, "Liked it that much huh!! Try again, max: 10"]
    },
    review: String
});

//make the model
const Fruit = mongoose.model("Fruit", fruitSchema);

//use the model
const apple = new Fruit({
    name: "Apple",
    rating: 6,
    review: "heathy fruit"
});

//apple.save();

//person
//make the person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});
//make the model
const Person = mongoose.model("Person", personSchema);

const dragonfruit = new Fruit({
    name: "Dragonfruit",
    rating: 9,
    review: "needs to be perfectly ripe."
})

//dragonfruit.save();


//use the model
const person = new Person({
    name: "John",
    age: 16,
    favoriteFruit: dragonfruit
});

//person.save();


Person.find(function(err, fruits) {
    if (err) {
        console.log(err);

    } else {


        fruits.forEach(function(element) {
            console.log(element)
        });
    }
});

Fruit.updateOne({ name: "apple" }, { rating: 7 }, function(err) {
    if (err) {
        console.log(err);

    } else {
        console.log("Successfully updated the document");
    }
});

Fruit.deleteMany({ name: "Joh" }, function(err) {
    if (err) {
        console.log(err);

    } else {
        console.log("Successfully deleted from the document");

    }
});