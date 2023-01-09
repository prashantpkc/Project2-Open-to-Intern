const internmodel = require("../models/internmodel");

module.exports.createIntern = async (req, res) => {
  try {
    let savedata = await internmodel.create(req.body);

    res
      .status(201)
      .send({ status: true, message: "created success", data: savedata });
  } catch (err) {
    console.log("ERROR:-", err.message);
    res.status(500).send({ status: false, message: "SOMETHING WENT WRONG" });
  }
};
