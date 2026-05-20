const Todo=require('../models/Todo')

exports.createTodo=async(req,res)=>{
    const{title}=req.body
    const result=await Todo.create(
        {
            title,
            user:req.user.id
        }
    )
    res.json(result)
}

exports.getTodo=async(req,res)=>{
    const result=await Todo({user:req.user.id})
    res.json(result)
}

exports.deleteTodo=async(req,res)=>{
    const{id}=req.params
 const result=await Todo.findByIdAndDelete(
  {_id:id,
    user:req.user.id
  }
)
if(!result) return res.status(404).json('Not found')
res.json({message:'Deleted'})
}

exports.updateTodo=async(req,res)=>{
    const{id}=req.params
    const result=await Todo.findByIdAndUpdate(
       { _id:id, user:req.params.id},
        {title,completed},
        {new:true}
    )
    if(!result) return res.status(404).json('Not found')
        res.json(result)
}