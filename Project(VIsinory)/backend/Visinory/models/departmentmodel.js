const mongooge = require('mongoose')

const departmentschema= new mongooge.Schema({
    department_name:{type:String, default:null},
    status:{type:Boolean, default:true},
    created_at:{type:Date, default:Date.now()},
})

module.exports = new mongooge.model('department',departmentschema)