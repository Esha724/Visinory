import { Link } from "react-router-dom"

export default function UserDashboard(){
    const dashboard=[{
        icon:"upcoming.png",
        Number_of_project:"10",
        project_status:"UpComing Project",
        bg_color:""
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
         <div className="container-fluid mt-5 bg-success px-5 pb-5 text-dark bg-opacity-25">
            <div className="row mt-5 pt-5">
            <div className="col-md-10">
                    <h3 className="fw-bold text-danger mt-5">Welcome back, User</h3>
                </div>
                <div className="col-md-10 mt-3">
                    <h4>Your Project Summary</h4>
                </div>
            </div>
            <Link to="project"> <div className="row my-5">
            {dashboard.map((e,index)=>(
               <div className="card col-md-3 mx-5 bg- p-2 text-dark p-3 border-rounded shadow-lg bg-light bg-gradient" >
                <img src={"assets/img/"+`${e.icon}`} style={{width:"75px"}} className="card-img-top ms-3 py-5" alt="..."/>
                <div className="card-body ">
                  <h1 className="card-title display-1">{e.Number_of_project}</h1>
                  <h5 className="card-text">{e.project_status}</h5>
                </div>
                  
              </div>
            
            
            ))}
            </div>
            </Link> 
        </div>
        </>
    )
}