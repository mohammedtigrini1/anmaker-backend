const router = require("express").Router();
const { checkJWT } = require("../middlewares/check-jwt");
const ShapeModel = require("../models/shape.model");

router.get('/shapes', async (req, res, next) => {
  // TODO
  res.json({
    success: true,
    message: 'Successfully fetched shape.',
  });
});

router.get('/shape/:name', async (req, res, next) => {
  console.log(req.param.name);
  ShapeModel.findOne({ shapeName: req.param.name }, (err, shape) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Failed to get shape ${req.param.name}.`,
      });
      return;
    }

    if (!shape) {
      res.status(404).json({
        success: false,
        message: `Shape ${req.param.name} does not exist`,
      });
      return;
    }
    res.json({
      success: true,
      message: 'Successfully fetched shape.',
      shape: shape,
    });
  });
});

// router.get('/shape/:id', async (req, res, next) => {
//   // TOOD
//   res.json({
//     success: true,
//     message: `Successfully fetched shape ${req.params.id}`,
//   });
// });

router.post('/shape', async (req, res, next) => {
  // TODO
  res.json({
    success: true,
    message: `Successfully created shape`,
  });
});

module.exports = router;
