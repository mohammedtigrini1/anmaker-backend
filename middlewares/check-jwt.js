const axios = require('axios');

const auth = {
  checkJWT: function(req, res, next) {
    let token = req.headers["authorization"];
    if (token) {
      axios.default.get(`${process.env.AUTH_SERVER_URL}/verifytoken`, {headers : {authorization : token}})
      .then((res) => {
        req.decoded = res.data.user;
        next();
      }).catch(err => {
        res.status(401).json({
            success: err.response.data.success,
            message: err.response.data.message
        });
      });
    } else {
      res.status(403).json({
        success: false,
        message: "No token provided"
      });
    }
  }
};

module.exports = auth;