//Start - my own error handling approach
//This is to be used for ALL errors, whenever encountered in the app
const errorHandler = (error,req,res,next) => {
  res.status(500).send({
    code:500,
    route:req.path,
    message: `Server Error 500: ${error}`
  })
}

module.exports = errorHandler;