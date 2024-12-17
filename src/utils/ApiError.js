class ApiError extends Error{
    constructor(
        statuseCode,
        message="Somthing wont wrong",
        error=[],
        stack="",

    ){
        super(message)
        this.statuseCode=statuseCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}