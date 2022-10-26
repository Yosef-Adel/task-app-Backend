const {CostomApiError} = require('../errors/costom-erorr')
const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CostomApiError){
        return res.status(err.statusCode).json({error: err.message})
    }

    res.status(500).json({error: err.message})
}

module.exports = errorHandlerMiddleware