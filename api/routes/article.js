const express = require("express");
const articleRoute = express.Router();
const Article = require("../models/Article");
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");
require("dotenv/config");
const verifyToken = require("./verifyToken"); // middleware | function to verfiy token

articleRoute.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    console.log(err);
  }
});

articleRoute.post("/", async (req, res) => {
  try {
    const article = await Article.create({
      creator: req.body.creator,
      title: req.body.title,
      message: req.body.message,
      tags: req.body.tags,
      selectedFile: req.body.selectedFile,
    });
    res.send(article);
  } catch (err) {
    console.log(err);
  }
});

// article route patch request
articleRoute.patch("/:id", async (req, res) => {
  try {
    const updatedArticle = await Article.updateOne(
      { _id: req.params.id },
      {
        $set: { title: req.body.title },
      }
    );
    res.send(`Title ${req.body.title} has been successfully Updated...`);
  } catch (err) {
    console.log(err);
  }
});

articleRoute.delete("/:id", async (req, res) => {
  try {
    const deleteArticle = await Article.findByIdAndDelete(req.params.id);
    res.send(deleteArticle);
  } catch (err) {
    console.log(err);
  }
});

module.exports = articleRoute;
