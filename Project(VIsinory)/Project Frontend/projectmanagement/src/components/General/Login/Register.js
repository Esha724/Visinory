export default function Register(){
    return(
        <>
        {/* <!-- register  --> */}
    
            <div className="containerfluid my-5 pt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-4 me-5 shadow">
                        <img src="/assets/img/bg/register.jpg"  style={{width:"550px"}}/>
                    </div>
                <div className="col-md-6 shadow-sm  ">
                <h1 className="  text-center mt-5 fw-bold display-5">Register Now</h1>
                <form action="#" method="post">
                    <div className="row mt-3 justify-content-center">
                    <div className="col-md-6 form-group justify-content-center">
                        <label className="col-form-label justify-content-center">Username</label>
                        <input type="text" className="form-control" placeholder="Your name" name="Name" required=""/>
                    </div>
                    <div className=" col-md-6 form-group justify-content-center">
                        <label className="col-form-label">Email</label>
                        <input type="email" className="form-control" placeholder="User@email.com" name="Email"
                            required=""/>
                    </div>
                    <div className="col-md-6 mt-3 form-group justify-content-center">
                        <label className="col-form-label">Password</label>
                        <input type="password" className="form-control" placeholder="*****" name="Password" required=""/>
                    </div>
                    <div className="col-md-6 mt-3 form-group justify-content-center">
                        <label className="col-form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="*****" name="Password" required=""/>
                    </div>
                    <div className="col-md-12 mt-3">
                        <textarea className="form-control" placeholder="Address" rows={3}/>
                    </div>
                    <div className=" mt-3 text-center">
                        <div className="sub-w3layouts_hub">
                            <input type="checkbox" id="brand1" value=""/>
                            <label for="brand1" className="text-li text-style-w3ls">
                                <span></span>I Accept to the Terms & Conditions</label>
                        </div>
                    </div>
                    </div>
                    <div className="row my-2 mb-3">
                        <div className="col-md-2 d-block mx-auto my-3">
                         <button type="submit" className="btn  btn-danger">Register</button>
                        </div>
                    </div>
                </form>
                </div>
                </div>
            </div>
            {/* <!-- //register --> */}
        </>
    )
}