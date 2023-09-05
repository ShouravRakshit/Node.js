import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        id : uuidv4(),
        username: "Ichigo",
        email: "ichigo@email.com"
    },
    {
        id : uuidv4(),
        username : "yhwach",
        email: "yhwach@email.com"
    }
]

export default users;