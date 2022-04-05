const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
const app = express();
const dotenv = require("dotenv");
app.use(router);

dotenv.config({ path: "./config/.env" });
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("databse connected");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
