const Lunch = require("../models/lunches");

exports.getAllLunches = async (req, res) => {
  try {
    const result = await Lunch.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Lunches were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Lunches werent found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLunchById = async (req, res) => {
  try {
    const result = await Lunch.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Lunch was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Lunch wasnt found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createLunch = async (req, res) => {
  try {
    const data = new Lunch({
      soup: req.body.soup,
      first: req.body.first,
      second: req.body.second,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Lunch was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Lunch was not created aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateLunch = async (req, res) => {
  try {
    const data = {
      soup: req.body.soup,
      first: req.body.first,
      second: req.body.second,
    };
    const result = await Lunch.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Lunch was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Lunch was not updated aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchLunch = async (req, res) => {
  try {
    const data = {};
    for(const ops of req.body){
      data[ops.propname] = ops.value
    }
    
    const result = await Lunch.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Lunch was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Lunch was not patched aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteLunch = async (req, res) => {
  try {
    const result = await Lunch.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Lunch was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Lunch was not deleted aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
