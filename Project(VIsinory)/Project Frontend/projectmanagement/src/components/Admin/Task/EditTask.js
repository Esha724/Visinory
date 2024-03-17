import { Link } from "react-router-dom"

export default function EditTask(){
    return(
        <>
        <div className="containerfluid mt-5 pt-5" >
            <div className="row justify-content-center my-5" >
                <div className="col-md-12 border shadow-sm bg-light " >
                    <h1 className="text-center mt-5 display-4 fw-bold">Edit Task</h1>        
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Task Name:</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Assignee:</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="col-md-5 form-group justify-content-center ">
                            <label className="col-form-label">Start Date:</label>
                            <input type="date" className="form-control"/>
                        </div>
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Due Date:</label>
                            <input type="date" className="form-control" required/>
                        </div>
                        <div className="col-md-10 mt-4 form-group justify-content-center">
                            {/* <label className="col-form-label">Project Description</label> */}
                            <textarea className="form-control" name="description" rows={4}  placeholder=
                            "To-Do" />
                        </div>
                       <div className="row  justify-content-center ">
                       <div className="col-md-2 justify-content-center">
                        <Link to="/admin/task"><button className="btn btn-danger mt-3 d-block  justify-content-center mb-4 " type="submit">  Submit</button></Link>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}