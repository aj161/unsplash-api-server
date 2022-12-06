// Global or Application-level Middleware
//Called every time the app receives a request. Applicable to all requests (endPoints (application-wide))
const loggerMiddleware = (req, res, next) => {
  console.log(`Logged @ ---${new Date()}`);
  console.log(`Request Method: ${req.method}`);
  next();
}

module.exports = loggerMiddleware;