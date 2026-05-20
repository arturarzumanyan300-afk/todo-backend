const router=require ('express').Router()
const auth=require('../middleware/auth')
const controlller=require('../controllers/todoController')

router.get('/',auth,controlller.getTodo)
router.post('/',auth,controlller.createTodo)
router.delete('/:id',auth,controlller.deleteTodo)
router.put('/:id',auth,controlller.updateTodo)

module.exports=router