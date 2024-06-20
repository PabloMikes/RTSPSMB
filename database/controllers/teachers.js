const Teacher = require("../models/teachers");

exports.getAllTeachers = async (req, res) => {
  try {
    const result = await Teacher.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Teachers were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Teachers werent found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const result = await Teacher.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Teacher was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Teacher wasnt found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const data = new Teacher({
      name: req.body.name,
      description: req.body.description,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      picture: req.body.picture
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Teacher was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Teacher was not created aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      description: req.body.description,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      picture: req.body.picture
    };
    const result = await Teacher.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Teacher was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Teacher was not updated aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchTeacher = async (req, res) => {
  try {
    const data = {};
    for(const ops of req.body){
      data[ops.propname] = ops.value
    }
    
    const result = await Teacher.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Teacher was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Teacher was not patched aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const result = await Teacher.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Teacher was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Teacher was not deleted aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
