const mongooge = require('mongoose')

const projectschema= new mongooge.Schema({
    project_name:{type:String, default:null},
    created_by:{type:String, default:null},
    start_date:{type:Date, default:null},
    due_date:{type:Date, default:null},
    description:{type:String, default:null},
    status:{type:Boolean, default:true},
    created_at:{type:Date, default:Date.now()},
})

module.exports = new mongooge.model('project',projectschema)