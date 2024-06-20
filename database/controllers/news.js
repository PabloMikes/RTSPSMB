const News = require("../models/news");

exports.getAllNews = async (req, res) => {
  try {
    const result = await News.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "News were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "News werent found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const result = await News.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "News was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "News wasnt found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createNews = async (req, res) => {
  try {
    const data = new News({
      date: req.body.date,
      text: req.body.text,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "News was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "News was not created aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateNews = async (req, res) => {
  try {
    const data = {
      date: req.body.date,
      text: req.body.text,
    };
    const result = await News.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "News was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "News was not updated aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchNews = async (req, res) => {
  try {
    const data = {};
    for(const ops of req.body){
      data[ops.propname] = ops.value
    }
    
    const result = await News.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "News was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "News was not patched aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const result = await News.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "News was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "News was not deleted aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
