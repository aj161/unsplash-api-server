module.exports = (req,res,next) => {
  res.status(404).json({
    code: 404,
    route: req.path,
    message: 'Route not found 404'
  })
}