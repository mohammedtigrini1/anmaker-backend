const router = require("express").Router();

router.get("/", async (req, res, next) => {
    res.json({
        success: true, 
        message: "Server is running."
    });
})

router.get('/health', async (req, res, next) => {
    res.json({
        success: true,
        message: "Server is running!"
    });
});


module.exports = router;