import { Link } from "react-router-dom";

export default function UserEnquiry(){
    return(
        <>
        <div className="container-fluid mt-5 pt-5">
            <div className="row justify-content-center my-5">
                <div className="col-md-5">
                    <img src="/assets/img/bg/enquiry.png" style={{width:"600px"}}/>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center mt-5 display-4 fw-bold">Enquiry Form</h1>        
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6 form-group justify-content-center">
                            <label className="col-form-label">Name:</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="col-md-6 form-group justify-content-center">
                            <label className="col-form-label">Email:</label>
                            <input type="email" className="form-control" required/>
                        </div>
                        <div className="col-md-12 form-group justify-content-center">
                            <label className="col-form-label">Subject:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-12 mt-4 form-group justify-content-center">
                            {/* <label className="col-form-label">Project Description</label> */}
                            <textarea className="form-control" name="description" rows={4}  placeholder=
                            "Message" />
                        </div>
                       <div className="row  justify-content-center ">
                       <div className="col-md-3 justify-content-center">
                        <Link to="enquiry"><button className="btn btn-danger my-4 d-block  justify-content-center " type="submit"> Submit</button></Link>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}