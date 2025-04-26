import mongoose from "mongoose";

const urlsSchema = mongoose.Schema({
  shortUrl: { type: String, required: true },
  longUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Urls = mongoose.model("urls", urlsSchema);
