const express = require("express");
const router = express.Router();
const employeeRouter = require("./employee")

router.use("/employee",employeeRouter)

module.exports = router