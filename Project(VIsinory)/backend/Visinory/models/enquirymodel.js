const mongooge = require('mongoose')

const enquiryschema = new mongooge.Schema({
    name:{type:String, default:null},
    email:{type:String, default:null},
    subject:{type:String, default:null},
    message:{type:String, default:null},
    status:{type:Boolean, default:true},
    created_at:{type:Date, default:Date.now()},
})

module.exports= new mongooge.model('userenquiry',enquiryschema)