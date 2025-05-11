const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");

dotenv.config();
const connectDB = require("./config/db");
connectDB();

const userRoute = require("./routes.js/userRoute");
const app = express();

app.use(express.json());

// Enable CORS for all origins
app.use(cors({
  origin: "*"
}));

// API routes
app.use("/api/user", userRoute);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../Portfolio/dist")));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Portfolio/dist", "index.html"));
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
