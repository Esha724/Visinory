import { Link } from "react-router-dom"

export default function AdminDashboard(){
    const dashboard=[{
        icon:"upcoming.png",
        Number_of_project:"10",
        project_status:"UpComing Project",
        bg_color:"blue"
    },
    {
        icon:"waiting.png",
        Number_of_project:"20",
        project_status:"In Progress Project"
    },
    {
        icon:"detail.png",
        Number_of_project:"40",
        project_status:"Completed Project"
    }]
    return(
        <>
        <div className="container-fluid p-5 bg-success p-2 text-dark bg-opacity-25" >
            <div className="row mt-5 pt-5">
                <div className="col-md-10">
                    <h3>ProjectSummary</h3>
                    <p>Add new project and manage all of projects</p>
                </div>
                <div className="col-md-2 ">
                   <Link to="addproject"><button className="btn btn-primary mt-2">+ Add Project</button></Link> 
                </div>
            </div>
           
            <Link to="project"> <div className="row my-5">
            {dashboard.map((e,index)=>(
               <div className="card col-md-3 mx-5 shadow text-dark p-3">
                <img src={"assets/img/"+`${e.icon}`} style={{width:"75px"}} class="card-img-top ms-3 py-5" alt="..."/>
                <div className="card-body ">
                  <h1 className="card-title display-1">{e.Number_of_project}</h1>
                  <h5 className="card-text">{e.project_status}</h5>
                </div>    
              </div>
            ))}
            </div>
            </Link> 
            <div className="row justify-content-center mt-3">
            <div className="card col-md-8  mx-5 shadow text-dark p-4 " style={{backgroundColor:""}}>
            <h3 className="text-center mb-2"> Project Progress Bar</h3>
               <div className="progress my-2" role="progressbar" aria-label="Default striped example"           aria-valuenow="10" aria-valuemin="0" aria-valuemax="50">
                 <div className="progress-bar progress-bar-striped bg-danger text-dark bg-opacity-50" style={{width: "10%"}}></div>UpComing
               </div>
               <div className="progress my-2" role="progressbar" aria-label="Default striped example"           aria-valuenow="10" aria-valuemin="0" aria-valuemax="50">
                 <div className="progress-bar progress-bar-striped bg-warning text-dark bg-opacity-50" style={{width: "60%"}}>In progress</div>
               </div>
               <div className="progress my-2" role="progressbar" aria-label="Default striped example"           aria-valuenow="10" aria-valuemin="0" aria-valuemax="50">
                 <div className="progress-bar progress-bar-striped bg-success text-dark bg-opacity-50" style={{width: "100%"}}>Completed</div>
               </div>
               </div>
               </div>
            
        </div>
        
        </>
    )
}