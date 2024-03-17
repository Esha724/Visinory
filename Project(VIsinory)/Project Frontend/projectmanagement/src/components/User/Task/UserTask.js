export default function UserTask(){
    const task=[
        {
            task_name:"Design sign up flow",
            description:"By the time a prospect arrives at your signup page, in most cases, they've already evaluated. ",
            type:"Design",
        },{
            task_name:"Landing page content",
            description:"Write the content of the new landing page and prepare the for the different sections. ",
            type:"Marketing",
        },{
            task_name:"Design sign up flow",
            description:"By the time a prospect arrives at your signup page, in most cases, they've already evaluated. ",
            type:"Design",
        },{
            task_name:"Define a new tool for metrics",
            description:"By the time a prospect arrives at your signup page, in most cases, they've already evaluated. ",
            type:"Design",
        },{
            task_name:"Design sign up flow",
            description:"By the time a prospect arrives at your signup page, in most cases, they've already evaluated. ",
            type:"Design",
        },
    ]
    return(
        <>
         <div className="container ">
            <div className="row ">
                <div className="col-md-12 mt-5 pt-5 ">
                    <h1 className="fw-bold text-center mt-5">Your Tasks</h1>
                </div>
            </div>
             <div className="row my-2 mb-5 justify-content-center">
            {task.map((e,index)=>( 
             <div className="card col-md-10 mx-5 my-2 border-rounded shadow">  
                <div className="card-body text-dark">
                    <div className="row">
                    <div className="col-md-9">
                  <h4 className="card-title">{e.task_name}</h4>
                  <h6 className="card-text text-dark">{e.description}</h6><br/>
                  <button className="bg-light border-0">{e.type}</button>
                  </div>
                  <div className="col-md-1">
                    <button className="btn btn-outline-secondary mt-4">Start</button>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-outline-success mt-4">Complete</button>
                  </div>
                </div>
                </div>
              </div>
            ))}
            </div>
        </div>
        </>
    )
}