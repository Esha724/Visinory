const Project = require('../models/projectmodel')

function addproject(req,res){
    var validation = ""
    if(req.body.project_name == "")
    {
        validation += "Project name is required \n"
    }
    if(req.body.created_by== "")
    {
        validation += "Created By is required \n"
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

        let projectobject = new Project()
        projectobject.project_name = req.body.project_name
        projectobject.created_by = req.body.created_by
        projectobject.start_date = req.body.start_date
        projectobject.due_date = req.body.due_date
        projectobject.description  = req.body.description 
        projectobject.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'project inserted',
            'data':req.body
        })
    }
}
getallproject = (req,res)=>{
    Project.find(req.body).exec()
    .then(projectdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':projectdata
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
getsingleproject = (req,res)=>{
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
        Project.findOne({_id:req.body._id})
        .then(projectdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':projectdata
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

updateproject = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.project_name == "")
    {
        validation += "project name is required \n"
    }
    if(req.body.created_by == "")
    {
        validation += "Created By is required \n"
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
        Project.findOne({_id:req.body._id})
        .then(projectdata=>{
            if(projectdata == null)
            {
                res.json({
                    status:409,
                    success:false,
                    msg:'Data not found'
                })
            }
            else{
                projectdata.project_name = req.body.project_name
                projectdata.created_by = req.body.created_by
                projectdata.start_date = req.body.start_date
                projectdata.due_date = req.body.due_date
                projectdata.description = req.body.description
                projectdata.save()

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
    addproject,
    getallproject,
    getsingleproject,
    updateproject 
}