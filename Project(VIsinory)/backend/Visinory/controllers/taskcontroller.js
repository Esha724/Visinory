const Task = require('../models/taskmodel')

function addtask(req,res){
    var validation = ""
    if(req.body.task_name == "")
    {
        validation += "task name is required \n"
    }
    if(req.body.assignee== "")
    {
        validation += "assignee is required \n"
    }
    if(req.body.start_date == "")
    {
        validation += "Start date is required \n"
    }
    if(req.body.due_date == "")
    {
        validation += "Due Date is required \n"
    }
    if(req.body.description == "")
    {
        validation += "Description is required \n"
    }

    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{

        let taskobject = new Task()
        taskobject.task_name = req.body.task_name
        taskobject.assignee = req.body.assignee
        taskobject.start_date = req.body.start_date
        taskobject.due_date = req.body.due_date
        taskobject.description  = req.body.description 
        taskobject.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'task inserted',
            'data':req.body
        })
    }
}
getalltask = (req,res)=>{
    Task.find(req.body).exec()
    .then(taskdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':taskdata
        })
    })
    .catch(err=>{
        res.json({
  
            status:500,
            success:false,
            msg : 'Error Occur',
            error : String(err)
        })
    })
    
}
getsingletask = (req,res)=>{
    var validate = ""
    if(req.body._id == "")
    {
        validate += "_id is required"
    }

    if(!!validate)
    {
        res.json({
            status:409,
            success:false,
            msg:validate
        })
    }
    else{
        Task.findOne({_id:req.body._id})
        .then(taskdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':taskdata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg : 'Error Occur',
                error : String(err)
            })
        })
    }
}

updatetask = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.task_name == "")
    {
        validation += "task name is required \n"
    }
    if(req.body.assignee == "")
    {
        validation += "Assignee is required \n"
    }
    if(req.body.start_date == "")
    {
        validation += "start date is required \n"
    }
    if(req.body.due_date == "")
    {
        validation += "due date is required \n"
    }
    if(req.body.description == "")
    {
        validation += "Description is required \n"
    }
    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        Task.findOne({_id:req.body._id})
        .then(taskdata=>{
            if(taskdata == null)
            {
                res.json({
                    status:409,
                    success:false,
                    msg:'Data not found'
                })
            }
            else{
                taskdata.task_name = req.body.task_name
                taskdata.assignee = req.body.assignee
                taskdata.start_date = req.body.start_date
                taskdata.due_date = req.body.due_date
                taskdata.description = req.body.description
                taskdata.save()

                res.json({
                    status:200,
                    success:true,
                    msg:'Record updated'
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:'Error',
                error:String(err)
            })
        }) 
    }
}

module.exports={
    addtask,
    getalltask,
    getsingletask,
    updatetask 
}