const express = require("express");
const route = express.Router();
const { createCollege } = require("../controllers/collegeController");
const { createIntern } = require("../controllers/internController");

route.post("/functionup/colleges", createCollege);
route.post("/functionup/interns", createIntern);

module.exports = route;
