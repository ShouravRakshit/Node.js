import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', userSchema);
export default User;