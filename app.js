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
    name: "",
    rating: 6,
    review: "heathy fruit"
});

//apple.save();
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 9,
//     review: "great fruit"
// });
// const orange = new Fruit({
//     name: "Orange",
//     rating: 8,
//     review: "great fruit"
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "great fruit"
// });

// //insert multiple objects

// // Fruit.insertMany([apple, kiwi, orange, banana], function(err) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log("Successfully saved all the fruits to fruitsDB.");
// //         mongoose.Connection.close();
// //     }
// // });



//person
//make the person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});
//make the model
const Person = mongoose.model("Person", personSchema);

//use the model
const person = new Person({
    name: "John",
    age: 16
});

//person.save();

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);

    } else {

        mongoose.connection.close();

        fruits.forEach(function(element) {
            console.log(element.name)
        });
    }
});