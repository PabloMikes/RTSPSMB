const Comment = require("../models/comments");

exports.getAllComments = async (req, res) => {
  try {
    const result = await Comment.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Comments were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Comments werent found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const result = await Comment.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Comment was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Comment wasnt found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createComment = async (req, res) => {
  try {
    const data = new Comment({
      name: req.body.name,
      text: req.body.text
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Comment was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Comment was not created aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateComment = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      text: req.body.text
    };
    const result = await Comment.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Comment was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Comment was not updated aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchComment = async (req, res) => {
  try {
    const data = {};
    for(const ops of req.body){
      data[ops.propname] = ops.value
    }
    
    const result = await Comment.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Comment was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Comment was not patched aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const result = await Comment.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Comment was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Comment was not deleted aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
