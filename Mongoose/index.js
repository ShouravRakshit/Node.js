import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/human');

console.log('Connected!');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const fruitSchema = new Schema({
    author: ObjectId,
    name: String,
    rating: String,
    review: String 
});

const Fruit = mongoose.model('Fruit', fruitSchema); 

const fruit = new Fruit({
	name: "Apple",
	rating: "7",  
	review: "Great!"
});

const banana = new Fruit({
	name: "Banana",
	rating: "8.5",  
	review: "Great!"
});


const peopleSchema = new Schema({
    author: ObjectId,
    name: { type: String, required: true },
    age: Number
});

const People = mongoose.model('People', peopleSchema); 
const john = new People({
	name: "John",
	age: 70
});

const ivan = new People({
	name: "ivan",
	age: 20
});

// await ivan.save();
// console.log('ivan saved.');
// console.log('Saving fruit...');
// await fruit.save();
// console.log('Fruit saved.');

// console.log('Saving banana...');
// await banana.save();
// console.log('Banana saved.');

// console.log('Saved!');

// try {
//     const fruits = await Fruit.find();
//     // console.log(fruits);
//     fruits.forEach(element => {
//         console.log(element["name"]);
//     });
// } catch (err) {
//     console.log(err);
// }


// const filter = { name: 'John' };
// const update = { name: 'lorenzo' };

// await People.updateMany(filter, update);


const filter = { name: 'lorenzo' };

try {
    const result = await People.deleteOne(filter);
    if (result.deletedCount === 0) {
        console.log('No documents were deleted.');
    } else {
        console.log('Document was deleted successfully.');
    }
} catch (error) {
    console.error('Error occurred during deletion:', error);
}

mongoose.connection.close();
