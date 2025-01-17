const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization header missing",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token missing or malformed",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userData = await userModel.findById(decodedToken.userId);

    if (!userData || userData.sessionId !== decodedToken.sessionId) {
      return res.status(401).json({
        message: "session invalid or session expired",
      });
    }
    req.userData = {
      email: decodedToken.email,
      userId: decodedToken.userId,
      role: decodedToken.role,
      sessionId: decodedToken.sessionId,
    };
    next();
  } catch (error) {
    console.error("Authentication error", error);
    return res.status(401).json({
      message: "authentication failed",
    });
  }
};

module.exports = checkAuth;
