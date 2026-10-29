const { Router } = require("express");
const router = Router();

router.use((req, res, next) => {
  if (req.method !== "GET") {
    res.status(400).send("Invalid http request method");
  } else {
    next();
  }
});

router.get("/", function (req, res) {
  res.send("Ruta clientes medium");
});

module.exports = router;
