const mongooge = require('mongoose')

const employeeschema= new mongooge.Schema({
    employee_name:{type:String, default:null},
    employee_id:{type:String, default:null},
    join_date:{type:Date, default:null},
    department:{type:String, default:null},
    profile:{type:String, default:null},
    status:{type:Boolean, default:true},
    created_at:{type:Date, default:Date.now()},
})

module.exports = new mongooge.model('employee',employeeschema)