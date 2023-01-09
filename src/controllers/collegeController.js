const collegemodel = require("../models/collegemodel");

module.exports.createCollege = async (req, res) => {
  try {
    console.log("hi");
    let data = req.body
    let savedata = await collegemodel.create(data);

    res
      .status(201)
      .send({ status: true, message: "created success", data: savedata });
  } catch (err) {
    console.log("ERROR:-", err.message);
    res.status(500).send({ status: false, message: "SOMETHING WENT WRONG" });
  }
};
