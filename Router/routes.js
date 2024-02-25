const express = require('express');
const controller = require('../Controllers/controller');
const router=express.Router();
const cors = require("cors");
router.use(cors());

router.post('/add-regn', controller.addRegistration);

module.exports=router;