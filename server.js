const express= require("express"); 
const app = express();
const PORT = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3001, ()=>{
    console.log(`server has started on port ${PORT}`)
});