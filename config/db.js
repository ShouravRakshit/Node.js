import mongoose from 'mongoose';
import config from "./config.js";

const dbURL = config.db.url;

mongoose.connect(dbURL).then(() =>{
    console.log("mongodb atlas is connected!")
}).catch((error) =>{
    console.log(error);
    process.exit(1);
})

export default mongoose;
