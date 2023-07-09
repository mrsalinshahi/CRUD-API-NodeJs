require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const FRONTEND = process.env.FRONTEND;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

// set ip/domain for live your website

var corsOptions = {
  origin: FRONTEND, //you can configure multiple domain like ['http://example.com','http://shahi.com']
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/blog", (req, res) => {
  res.send("Hello bloger!");
});

// custom middleware
app.use(errorMiddleware);

// Databse Connection
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database Connected!");
    app.listen(PORT, () => {
      console.log(`Node API is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
