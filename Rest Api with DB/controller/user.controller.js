

const getAllUsers = (req, res) =>{
    res.status(200).json({
        message : "found all users"
    })
};

const getOneUser = (req, res) =>{
    res.status(200).json({
        message : "get one user"
    })
}

const createUser = (req, res) =>{
    res.status(201).json({
        message : "user is created"
    })
}

const updateUser = (req, res) =>{
    res.status(200).json({
        message : "user is updated"
    })
}

const deleteUser = (req, res) =>{
    res.status(200).json({
        message : "user is deleted"
    })
}


export {getAllUsers, getOneUser, createUser, updateUser, deleteUser};
