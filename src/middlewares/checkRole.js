const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.userData.role;

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: "Access denied. Insufficient permissions.",
          success: false,
          error: true,
        });
      }
      next();
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while checking user role.",
        success: false,
        error: true,
      });
    }
  };
};

module.exports = checkRole;
