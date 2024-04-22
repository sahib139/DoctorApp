const dotenv = require("dotenv");
dotenv.config();

module.exports={
    PORT : process.env.PORT,
    FilePath : __dirname+"/../../DynamicJsonFile/availability.json",
}