import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { shortenUrl, getOrignalUrl } from "./controllers/shortUrl.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })
  .then(() => console.log("Db connected"))
  .catch((err) => console.error(err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { shortUrl: null });
});

app.post("/shorturl", shortenUrl);

app.get("/:shortCode", getOrignalUrl);


const port = 5000;
app.listen(port, () => console.log(`Server is listening to port ${port}`));
