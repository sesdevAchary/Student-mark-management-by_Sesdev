const express = require('express')
const router= express.Router();

const studentController = require('../controllers/studentController.js');


router.post('/student', studentController.createStudentInfo);      // Create a newSTUDENT
router.get('/student', studentController.getstudentInfo);         // get a student
router.get('/student/:Id',studentController.getstudentInfoById); // get student info by ID 🆔 




module.exports = router;