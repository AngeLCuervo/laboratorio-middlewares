const { Router } = require("express");
const router = Router();

router.use((req, res, next) => {
  res.header("url", req.originalUrl);
  next();
});

router.get("/", function (req, res) {
  res.send("Ruta clientes premium");
});

module.exports = router;
