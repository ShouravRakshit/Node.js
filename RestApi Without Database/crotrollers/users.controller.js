import users from "../models/users.model.js"
import { v4 as uuidv4 } from 'uuid';

// get all users
const getAllUsers = (req, res) => {
    res.status(200).json({
        users
    })
}

// create new users
const createUser = (req, res) => {
   const newUser = {
    id : uuidv4(),
    username: req.body.username,
    email : req.body.email
   }
   users.push(newUser);
   res.status(201).json(users);
}

// update user
const updateUser = (req, res) => {
    const userid = req.params.id; 
    const updateUsername = req.body.username;
    const updateEmail = req.body.email;
    console.log(updateUsername);
    console.log(updateEmail);
    users.filter((user) => user.id === userid).map((selecteduser=>{
        selecteduser.username = updateUsername;
        selecteduser.email = updateEmail;
    }))
    res.status(200).json(userid);
}

// delete a user 
const deleteUser = (req, res) => {
    const userid = req.params.id; 
    users = users.filter((user) => user.id !== userid);
    res.status(200).json(users);
}

export {getAllUsers, createUser, updateUser, deleteUser};
