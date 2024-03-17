import { Link } from "react-router-dom"

export default function EditProject(){
    return(
        <>
         <div className="container-fluid my-5 py-5 bg-light">
            <div className="row justify-content-center my-5 ">
                <div className="col-md-12 border shadow-sm " >
                    <h2 className="text-center mt-5 display-5 fw-bold">Edit Project</h2>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Project Name:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Created By:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Start Date:</label>
                            <input type="date" className="form-control"/>
                        </div>
                        <div className="col-md-5 form-group justify-content-center">
                            <label className="col-form-label">Due Date:</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-10 mt-4 form-group" >
                            {/* <label className="col-form-label">Project Description</label> */}
                            <textarea className="form-control" name="description" rows={4} placeholder=
                            "Project Description" />
                        </div>
                       <div className="row  justify-content-center ">
                       <div className="col-md-2 justify-content-center">
                        <Link to="/admin/project"><button className="btn btn-danger my-4  d-block  justify-content-center " type="submit">  Submit</button></Link>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}