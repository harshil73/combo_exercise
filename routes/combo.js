const { Router } = require("express")
const router = Router();

const adddata = require('../controller/combo').generateData
const choice = require('../controller/combo').choice
// console.log(generatecombo)

router.get('/adddata',adddata)
router.get('/choice',choice)

module.exports=router