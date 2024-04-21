const dotenv = require("dotenv");
dotenv.config();

module.exports={
    PORT : process.env.PORT,
    FilePath : process.env.FilePath,
}