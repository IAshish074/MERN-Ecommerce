const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const userRoutes = require("./routes/UserRoutes.js");

dotenv.config(); // ✅ Load environment variables

const app = express();

// ✅ Middleware to parse JSON body
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
connectDb();

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Welcome to server page");
});

// ✅ User API routes
app.use("/api/users", userRoutes);

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
