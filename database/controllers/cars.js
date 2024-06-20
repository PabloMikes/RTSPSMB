const Car = require("../models/cars");

exports.getAllCars = async (req, res) => {
  try {
    const result = await Car.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Cars were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Cars werent found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCarById = async (req, res) => {
  try {
    const result = await Car.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Car was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car wasnt found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createCar = async (req, res) => {
  try {
    const data = new Car({
      brand: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Car was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not created aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const data = {
      brand: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      price: req.body.price,
    };
    const result = await Car.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Car was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not updated aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchCar = async (req, res) => {
  try {
    const data = {};
    for(const ops of req.body){
      data[ops.propname] = ops.value
    }
    
    const result = await Car.findByIdAndUpdate(req.params.id,data);
    if (result) {
      return res.status(200).send({
        msg: "Car was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not patched aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const result = await Car.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Car was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not deleted aneb mas velky hovno",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
