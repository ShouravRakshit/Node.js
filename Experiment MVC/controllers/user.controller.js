import users from "../models/users.model.js";

export const getUsers = (req, res) => {
    res.render("../views/index.ejs");
}

export const saveUsers = (req, res) => {
    const name = req.body["fullName"];
    const age = Number(req.body["age"]);
    const userInfo = {
        name,
        age
    }
    users.push(userInfo);
    res.status(201).json({
        success : true,
        users
    })
}
