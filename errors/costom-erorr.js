

class CostomApiError extends Error {
    constructor (message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode)=>{
    return new CostomApiError(msg,statusCode)
}

module.exports={
    CostomApiError,
    createCustomError
}