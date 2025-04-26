import shortid from "shortid";
import { Urls } from "../Models/Urls.js";

export const shortenUrl = async (req, res) => {
  const body = req.body;
  console.log({ body });
  const { longUrl } = body;
  const shortCode = shortid.generate();
  const shortUrl = `http://localhost:5000/${shortCode}`;
  const newUrl = new Urls({ shortCode, longUrl });

  await newUrl.save();
  res.render("index", { shortUrl });
};

export const getOrignalUrl = async (req, res) => {
  try {
    const shortCode = req.params.shortCode;
    const orignalUrl = await Urls.findOne({ shortCode });

    if (orignalUrl) res.redirect(orignalUrl.longUrl);
    else res.status(404).send("Short URL not found!");
  } catch (err) {
    console.error(err);
  }
};
