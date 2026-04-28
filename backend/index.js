const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

// adatbázis kapcsolat
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webshop",
});

// API endpoint
app.get("/products", (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) {
      res.status(500).send("Hiba az adatlekérésnél");
    } else {
      res.json(results);
    }
  });
});

// szerver indítás
app.listen(3000, () => {
  console.log("Szerver fut: http://localhost:3000");
});