const getGoals = (req, resp)=>{
    
    resp.status(200).json({message: 'Get request'})
}
const postGoals = (req, resp)=>{
    if(!req.body.text){
        resp.status(400) 
        throw new Error('Please add a text field')
    }

    resp.status(200).json({message: 'Post request'})
}
const putGoals = (req, resp)=>{
    resp.status(200).json({message: `Put request ${req.params.id}`})
}
const deleteGoals = (req, resp)=>{
    resp.status(200).json({message: `Delete request ${req.params.id}`})
}

module.exports = 
{
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}