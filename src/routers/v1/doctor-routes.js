const express = require("express");
const router = express.Router();

const {DoctorController} = require("../../controllers/index"); 
const doctorController = new DoctorController();

router.get("/doctor-availability",doctorController.getAvailability.bind(doctorController));

module.exports=router;  