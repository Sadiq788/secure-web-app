const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/data", auth, (req, res) => {
  res.json({ secret: "This is protected data.", user: req.user });
});

module.exports = router;
