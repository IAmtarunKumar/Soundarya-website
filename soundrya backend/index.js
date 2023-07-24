const express = require("express");
const cors =  require("cors")

const { connection } = require("./config/db");
const { productRouter } = require("./router/product.router");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome");
});

//product router
app.use("/", productRouter);

app.listen(process.env.port || 8080, async () => {
  try {
    await connection;

    console.log("db is working");
  } catch (error) {
    console.log(error);
  }

  console.log(`${process.env.port} is working`);
});
