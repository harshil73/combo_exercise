const { Router } = require("express");
const router = Router();

let {choice,addSelectMenu,addOptionMenu,removeOptionMenu,removeSelectMenu} = require("../controller/combo");

router.get('/choice',choice)
router.get('/add_select',addSelectMenu)
router.post('/add_option',addOptionMenu)
router.get('/remove_option',removeOptionMenu)
router.get('/remove_select',removeSelectMenu)

module.exports = router;
