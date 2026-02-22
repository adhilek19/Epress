const express= require("express");
const { getusers, update, create, deletu, edituser } = require("../controllers/user.controre");

const router=express.Router();




router.get("/",getusers)
//user kittan vendyttt
router.get("/:id",update)

//user create cheyaaan
router.post("/",create)

//dele akaan


router.delete("/:id",deletu)

//edit cheyann patchn requsrt ann kodkaaaa

router.patch("/:id",edituser)

module.exports=router;