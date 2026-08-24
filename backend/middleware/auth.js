function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (token === "my-secret-token") {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
}

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (token === "my-secret-token") {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
}


module.exports = authMiddleware;
