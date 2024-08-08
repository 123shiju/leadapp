const express = require("express");
const router = express.Router();
const leadController = require("../Controllers/leadcontrollers");

router.post("/createLeads", leadController.createLead);
router.get("/getLeads", leadController.getLeads);
// router.get("/searchLeads", leadController.searchLeads);
router.put("/updateLeads/:id", leadController.updateLead);
router.get("/editLeads/:id", leadController.editLeads);
router.delete("/deleteLeads/:id", leadController.deleteLead);

module.exports = router;
