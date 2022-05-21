const express = require("express");
const employeeRouter = express.Router();
const employeeController = require("../controller/employee")

employeeRouter.route("/").get(employeeController.getDetails)

module.exports = employeeRouter