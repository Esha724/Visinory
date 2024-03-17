const Employee= require('../models/employeemodel')

function addemployee(req,res){
    console.log()
    var validation = ""
    if(req.body.employee_name == "")
    {
        validation += "Employee name is required \n"
    }
    if(req.body.employee_id == "")
    {
        validation += "Employee Id is required \n"
    }
    if(req.body.join_date == "")
    {
        validation += "Join Date is required \n"
    }
    if(req.body.department == "")
    {
        validation += "Department is required \n"
    }
    if(req.body.profile == "")
    {
        validation += "Profile is required \n"
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

        let employeeobject = new Employee()
        employeeobject.employee_name = req.body.employee_name
        employeeobject.employee_id = req.body.employee_id
        employeeobject.join_date = req.body.join_date
        employeeobject.department = req.body.department
        employeeobject.profile = req.body.profile
        employeeobject.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'employee inserted',
            'data':req.body
        })
    }
}

getallemployee = (req,res)=>{
    Employee.find(req.body).exec()
    .then(employeedata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':employeedata
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

getsingleemployee = (req,res)=>{
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
        Employee.findOne({_id:req.body._id})
        .then(employeedata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':employeedata
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

updateemployee = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.employee_name == "")
    {
        validation += "employee name is required \n"
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
        Employee.findOne({_id:req.body._id})
        .then(employeedata=>{
            if(employeedata == null)
            {
                res.json({
                    status:409,
                    success:false,
                    msg:'Data not found'
                })
            }
            else{
                employeedata.employee_name = req.body.employee_name
                employeedata.employee_id = req.body.employee_id
                employeedata.join_date = req.body.join_date
                employeedata.department = req.body.department
                employeedata.profile = req.body.profile
                employeedata.save()

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
    addemployee,
    getallemployee,
    getsingleemployee,
    updateemployee
}