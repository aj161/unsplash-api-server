//Start - Error-handling middleware
const validator = (req,res,next) => {
  let title = req.query.title;
  if(!title){
    next('Title is required');
  }else {
    next();
  }
}

module.exports = validator;