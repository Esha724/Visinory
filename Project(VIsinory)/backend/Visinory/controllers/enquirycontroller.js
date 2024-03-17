const Enquiry = require('../models/enquirymodel')

function addenquiry(req,res){
    var validation=""
    if (req.body.name==""){
        validation +="Name is required /n"
    }
    if (req.body.email==""){
        validation +="Email is required /n"
    }
    if (req.body.subject==""){
        validation +="Subject is required /n"
    }
    if (req.body.message==""){
        validation +="Message is required /n"
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
        let enquiryobject = new Enquiry()
        enquiryobject.name=req.body.name
        enquiryobject.email=req.body.email
        enquiryobject.subject=req.body.subject
        enquiryobject.message=req.body.message
        enquiryobject.save()
        res.json({
            status:200,
            success:true,
            msg:'enquiry added',
            data:req.body
        })
    }
}

getallenquiry=(req,res)=>{
    Enquiry.find(req.body).then(
        enquirydata=>{
            res.json({
                status:200,
                success:true,
                msg:'data loaded',
                data:enquirydata
            })
        }
    ).catch(
        err=>{
            res.json({
                status:409,
                success:false,
                msg:'error occured',
                error:String(err)
            })
        }
    )
}

getsingleenquiry=(req,res)=>{
    var validate=""
    if(req.body._id==""){
        validate += "_id is required"
    }

    if(!!validate){
        res.json({
            status:409,
            success:false,
            msg:validate
        })   
     }
     else{
        Enquiry.findOne({_id:req.body._id})
        .then(enquirydata=>{
            res.json({
                status:200,
                success:true,
                msg:'data loaded',
                data:enquirydata
            })
        })
        .catch(
            err=>{
                res.json({
                    status:500,
                    success:false,
                    msg:'error occured',
                    error:String(err)
                })
            }
        )
     }
}

updateenquiry=(req,res)=>{
    var validation=""
    if (req.body.name==""){
        validation +="Name is required /n"
    }
    if (req.body.email==""){
        validation +="Email is required /n"
    }
    if (req.body.subject==""){
        validation +="Subject is required /n"
    }
    if (req.body.message==""){
        validation +="Message is required /n"
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
       Enquiry.findOne({_id:res.body._id})
       .then(enquirydata=>{
        if(enquirydata==null){
            res.json({
                status:409,
                success:false,
                msg:'Data not found'
            })
        }
        else{
        let enquiryobject = new Enquiry()
        enquiryobject.name=req.body.name
        enquiryobject.email=req.body.email
        enquiryobject.subject=req.body.subject
        enquiryobject.message=req.body.message
        enquiryobject.save()
        res.json({
            status:200,
            success:true,
            msg:'enquiry updated',
            data:req.body
        })
        }
       }
        
       )
       .catch(
        err=>{
            res.json({
                status:500,
                success:false,
                msg:'error',
                error:String(err)
            })
        }
       )
    }
}

module.exports={
    addenquiry,
    getallenquiry,
    getsingleenquiry,
    updateenquiry
}