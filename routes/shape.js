const router = require("express").Router();
const { checkJWT } = require("../middlewares/check-jwt");
const { schema } = require("../models/shape.model");

router.get('/shapes', checkJWT, async (req, res, next) => {
    // TODO
    res.json({
        success: true,
        message: "Successfully fetched shape."
    });
});


router.get('/shapes', checkJWT, async (req, res, next) => {
    //
});

module.exports = router;