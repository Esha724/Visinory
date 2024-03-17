const mongooge = require('mongoose')

const taskschema= new mongooge.Schema({
    task_name:{type:String, default:null},
    assignee:{type:String, default:null},
    start_date:{type:Date, default:null},
    due_date:{type:Date, default:null},
    description:{type:String, default:null},
    status:{type:Boolean, default:true},
    created_at:{type:Date, default:Date.now()},
})

module.exports = new mongooge.model('task',taskschema)