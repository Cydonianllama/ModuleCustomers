
const typesResponse = [
    {
        type : 'ok',
        code : 200
    },
    {
        type : 'created',
        code : 201
    },
    {
        type : 'bad request',
        code : 400
    }
]

function response(type,data,res){
    const utils = typesResponse.find(types => types.type === type)
    res.status(utils.code).send({
        status : utils.type,
        msg : data
    })    
}

module.exports =  response