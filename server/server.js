require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const contactRouter = require("./routes/contactRouter");
const privateRouter = require("./routes/privateRouter");
const errorHandler = require("./middleware/error");
const subscriptionRouter = require("./routes/subscriptionRouter");
//Connect DB
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/private", privateRouter);
app.use("/api/subscription", subscriptionRouter);
app.use("/api/contact", contactRouter);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message, data: data });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error:${err}`);
  server.close(process.exit(1));
});
