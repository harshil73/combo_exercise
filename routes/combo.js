const { Router } = require("express");
const router = Router();

let {home,choice,addSelectMenu,addOptionMenu,removeOptionMenu,removeSelectMenu, addData} = require("../controller/combo");

router.get('/home',home)
router.get('/choice',choice)
router.get('/add_select',addSelectMenu)
router.post('/add_option',addOptionMenu)
router.get('/remove_option',removeOptionMenu)
router.get('/remove_select',removeSelectMenu)
router.post('/adddata',addData)

module.exports = router;
