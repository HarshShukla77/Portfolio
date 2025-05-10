const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const color = require("colors")
dotenv.config();
const connectDB = require("./config/db")
connectDB();
const userRoute = require("./routes.js/userRoute")
const app = express();
app.use(express.json());

console.log("PORT:", process.env.PORT);

app.use(cors({
    origin: "*"
}));
app.use("/api/user",userRoute)
const PORT = process.env.PORT || 6000;
 app.listen(PORT, console.log(`server is running on port ${PORT}`.yellow.bold));