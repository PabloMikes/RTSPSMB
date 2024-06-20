const Account = require("../models/account");

exports.checkAccount = async (req, res) => {
  try {
    const result = await Account.find();
    if (result && result.length !== 0) {
      const data = new Account({
        name: req.body.name,
        password: req.body.password
      });
      let isCorrect = false;
      result.forEach(e => {
        if(e.name == data.name){
          if(e.password == data.password){
            isCorrect = true;
            return res.status(200).send({
              msg: "OK"
            });
          }
        }
      });
      if(!isCorrect){
        res.status(400).send({
          msg: "NOK"
        })
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllAccounts = async (req, res) => {
  try {
    const result = await Account.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Accounts were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Accounts werent found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const result = await Account.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Account was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Account wasnt found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createAccount = async (req, res) => {
  try {
    const data = new Account({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Account was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Account was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const result = await Account.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Account was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Account was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchAccount = async (req, res) => {
  try {
    const data = {};
    for (const ops of req.body) {
      data[ops.propname] = ops.value;
    }

    const result = await Account.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Account was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Account was not patched",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const result = await Account.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Account was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Account was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
