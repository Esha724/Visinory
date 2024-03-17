import { Link } from "react-router-dom"

export default function UserProject(){
    const obj=[
        {
            icon:"upcoming.png",
            project_name:"e-Learning platform",
            team:"team-1.jpg",
        }, {
            icon:"waiting.png",
            project_name:"Software piracy protection system",
            team:"team-2.jpg",
        }, {
            icon:"detail.png",
            project_name:"AI shopping system",
            team:"team-3.jpg",
        },{
            icon:"upcoming.png",
            project_name:"e-Learning platform",
            team:"team-1.jpg",
        }, {
            icon:"waiting.png",
            project_name:"Software piracy protection system",
            team:"team-2.jpg",
        }, {
            icon:"detail.png",
            project_name:"AI shopping system",
            team:"team-3.jpg",
        },
    ]
    return(
        <>
       <div className="container mt-5 pt-5">
        {/* <div className="container bg-dark mt-5 pt-5">
            <h1>Your Today's Work</h1>
        </div> */}
            <div className="row mt-2">
                {/* <div className="col-md-10">
                    <h3 className="fw-bold text-danger">Welcome back, User</h3>
                </div> */}
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h5 className="fw-bold">Projects you are working on:</h5>
                </div>
            </div>
            <Link to="/User/projectdetail"><div className="row my-2 mb-5">
            {obj.map((e,index)=>( 
             <div className="card col-md-3 mx-5 my-3 mb-5 border-rounded shadow">
                <img src={"/assets/img/"+`${e.icon}`} style={{width:"45px"}} class="card-img-top ms-3 mt-3" alt="..."/>
                <div className="card-body text-dark">
                  <h3 className="card-title">{e.project_name}</h3>
                  <Link to="/User/employee"><h5 className="card-text text-dark"><img src={"/assets/img/team/"+`${e.team}`} style={{width:"35px"}} className="card-img-top ms-3 mt-3 rounded-circle" alt="..."/>+3</h5></Link>
                </div>
                  
              </div>
            
            ))}
            </div>
            </Link>
        </div>
        </>
    )
}