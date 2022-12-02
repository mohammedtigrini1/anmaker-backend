const router = require("express").Router();
const { checkJWT } = require("../middlewares/check-jwt");
const ShapeModel = require("../models/shape.model");

router.get("/shapes", checkJWT, async (req, res, next) => {
  // TODO
  res.json({
    success: true,
    message: "Successfully fetched shape.",
  });
});

router.get("/shape/:name", checkJWT, async (req, res, next) => {
  ShapeModel.find({ shapeName: req.params.name }, (err, shape) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Failed to get shape ${req.params.name}.`,
      });
      return;
    }

    if (!shape) {
      res.status(404).json({
        success: false,
        message: `Shape does not exist`,
      });
      return;
    }
    res.json({
      success: true,
      message: "Successfully fetched shape.",
      shape: shape,
    });
  });
});

router.get("/shape/:id", async (req, res, next) => {
  // TOOD
  res.json({
    success: true,
    message: `Successfully fetched shape ${req.params.id}`,
  });
});

router.post("/shape", async (req, res, next) => {
  // TODO
  res.json({
    success: true,
    message: `Successfully created shape`,
  });
});

module.exports = router;
