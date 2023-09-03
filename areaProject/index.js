import {app} from "./server.js";
import { config } from 'dotenv';
config();
const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

