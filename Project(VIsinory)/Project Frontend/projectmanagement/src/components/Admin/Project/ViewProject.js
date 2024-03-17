import { Link } from "react-router-dom"

export default function ViewProject(){
    const project=[
        {
            Project_Name:"e-Learning platform",
            Status:"Not Started",
            Due_date:"Aug 15, 2023",
            Assignees:"Alex",
            Created_by:"John",
            Details:"i.png"
        },{
            Project_Name:"Smart health prediction system",
            Status:"In Progrss",
            Due_date:"June 13, 2023",
            Assignees:"Roy",
            Created_by:"Alexa",
            Details:"i.png"
        },
        {
            Project_Name:"Software piracy protection system",
            Status:"Completed",
            Due_date:"Feb 13, 2023",
            Assignees:"Allya",
            Created_by:"Ryle",
            Details:"i.png"
        },
        {
            Project_Name:"AI shopping system",
            Status:"In Progress",
            Due_date:"June 13, 2023",
            Assignees:"Alisha",
            Created_by:"John",
             Details:"i.png"
        }, {
            Project_Name:"e-Learning platform",
            Status:"Not Started",
            Due_date:"Aug 15, 2023",
            Assignees:"Alex",
            Created_by:"John",
            Details:"i.png"
        },{
            Project_Name:"Smart health prediction system",
            Status:"In Progrss",
            Due_date:"June 13, 2023",
            Assignees:"Roy",
            Created_by:"Alexa",
            Details:"i.png"
        },
        {
            Project_Name:"Software piracy protection system",
            Status:"Completed",
            Due_date:"Feb 13, 2023",
            Assignees:"Allya",
            Created_by:"Ryle",
            Details:"i.png"
        },
        {
            Project_Name:"AI shopping system",
            Status:"In Progress",
            Due_date:"June 13, 2023",
            Assignees:"Alisha",
            Created_by:"John",
            Details:"i.png"
        },
    ]
    return(
        <>
         <div className="containerfluid table-responsive mt-5 p-5">
            <h1 className="text-center display-1 text-white fw-bold mt-5 py-5 shadow" style={{backgroundImage:"url('/assets/img/bg/projectbg.jpg')",textShadow:" 2px 4px 8px #FFFFFF"}}>Projects</h1>
                <table className="table table-bordered table-hover table-striped mt-5">
                    <thead className="m-5">
                        <tr className="table-secondary">
                            <th>Sr.No</th>
                            <th>Project Name</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th> Assignees</th>
                            <th> Created By</th>
                            <th>  Details</th>
                            <th>  Edit</th>
                            <th>  Delete</th>
                        </tr>
                    </thead>
                        {project.map((e,index)=>(
                            <tr className="my-5" key={index} >
                                <td>{index+1}</td>
                                <td>{e. Project_Name}</td>
                                <td>{e.Status}</td>
                                <td>{e.Due_date}</td>
                                <td>{e.Assignees}</td>
                                <td>{e.Created_by}</td>
                                <td><Link to="/admin/projectdetail"><img src={"/assets/img/" + `${e.Details}`}style={{width:"25px"}} /></Link></td>
                                <td>
                                <Link to="/admin/editproject"><img src={"/assets/img/edit.png"} style={{width:"20px"}} /></Link>
                                </td>
                                <td>
                                <img src={"/assets/img/delete.png"} style={{width:"40px"}} />
                                </td>
                              
                            </tr>
                        ))}  
                </table>
            </div>
              {/* <td><button className="btn btn-primary bg-primary py-2">+ Add</button></td>  */}
                                 {/* <div className="row">
            <div className="col-md-10">
                    <h3>ProjectSummary</h3>
                    <p>Add new project and manage all of projects</p>
                </div>
                <div className="col-md-2 ">
                    <button className="btn btn-primary mt-2">+ Add Project</button>
                </div>
                </div> */}
            </>
            
    )
}