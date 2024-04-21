const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {PORT} = require("./config/server-config");
const APIroutes = require("./routers/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",APIroutes);

app.listen(PORT,()=>{    
    console.log(`Server started at ${PORT}`);
});