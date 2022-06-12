const express = require("express");
const postRoute = express.Router();
const Post = require("../models/post");
require("dotenv/config");

// post route Get request
postRoute.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

// post route Post request
postRoute.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      creator: req.body.creator,
      title: req.body.title,
      message: req.body.message,
      tags: req.body.tags,
      selectedFile: req.body.selectedFile,
    });
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

// post route Patch request
postRoute.patch("/:id", async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.send(`${updatedPost} Post has been successfully Updated...`);
  } catch (err) {
    console.log(err);
  }
});

// post route Delete request
postRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletePost = await Post.findByIdAndRemove(id);
    res.send(deletePost);
  } catch (err) {
    console.log(err);
  }
});

module.exports = postRoute;
