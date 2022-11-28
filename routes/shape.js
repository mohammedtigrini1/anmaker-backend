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

router.get('/shape/:name', checkJWT, async (req, res, next) => {
    // TODO
    res.json({
        success: true, 
        message: `Successfully fetched shape ${req.params.name}`
    })
});

router.get('/shape/:id', async (req, res, next) => {
    // TOOD
    res.json({
        success: true,
        message: `Successfully fetched shape ${req.params.id}`
    });
});

router.post('/shape', async (req, res, next) => {
    // TODO
    res.json({
        success: true,
        message: `Successfully created shape`
    });
})

module.exports = router;