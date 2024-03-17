const Department = require('../models/departmentmodel')

function adddepartment(req,res){
    var validation = ""
    if(req.body.department_name == "")
    {
        validation += "Department name is required \n"
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

        let departmentobject = new Department()
        departmentobject.department_name = req.body.department_name
        departmentobject.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'department inserted',
            'data':req.body
        })
    }
}
getalldepartment = (req,res)=>{
    Department.find(req.body).exec()
    .then(departmentdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':departmentdata
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
getsingledepartment = (req,res)=>{
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
        Department.findOne({_id:req.body._id})
        .then(departmentdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':departmentdata
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

updatedepartment = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.department_name == "")
    {
        validation += "department name is required \n"
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
        Department.findOne({_id:req.body._id})
        .then(departmentdata=>{
            if(departmentdata == null)
            {
                res.json({
                    status:409,
                    success:false,
                    msg:'Data not found'
                })
            }
            else{
                departmentdata.department_name = req.body.department_name
                departmentdata.save()

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
    adddepartment,
    getalldepartment,
    getsingledepartment,
    updatedepartment 
}