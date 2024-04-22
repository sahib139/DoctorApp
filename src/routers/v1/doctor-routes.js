const express = require("express");
const router = express.Router();

const {DoctorController} = require("../../controllers/index"); 
const doctorController = new DoctorController();

const getAvailabilityMiddleware = require("../../middleware/getAvailability-middleware");

router.get("/doctor-availability",getAvailabilityMiddleware,doctorController.getAvailability.bind(doctorController));

module.exports=router;  