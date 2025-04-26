import { Urls } from "../Models/Urls.js";

export const shortenUrl = async (req, res) => {
  const body = req.body;
  console.log({ body });
  res.render("index", { shortUrl: null });
};
