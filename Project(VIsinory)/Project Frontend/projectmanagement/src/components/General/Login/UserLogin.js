import { Link } from "react-router-dom";

export default function UserLogin(){
    return(
        <>
            {/* <!-- login  --> */}
            <div className="container-fluid mt-5 pt-5 ">
        <div className="row justify-content-center">
            <div className="col-md-5 mt-5 me-5">
                <img className="mt-3" src="/assets/img/bg/userlogin.jpg" />
            </div>
        <div className=" col-md-6 my-5  ">
            <h1 className="text-center  mt-5">User Login</h1>
            <div className="row justify-content-center mt-3 ">
                    <div className="col-md-2 ">
                    <img src="assets/img/profile.png" className="img-fluid rounded-start mt-3" alt="..." style={{width:"100px"}}/>
                    </div>
            </div>
            <div className="row  justify-content-center mt-3 ">
             <div className=" col-md-8 form-group justify-content-center">
                <label className="col-form-label">Email</label>
                <input type="email" className="form-control" placeholder="User@email.com" name="Email"
                required=""/>
             </div>
            </div>
          <div className="row mt-3 justify-content-center">
                    <div className="col-md-8 form-group justify-content-center">
                        <label className="col-form-label">Password</label>
                        <input type="password" className="form-control" placeholder="*****" name="Password" required=""/>
                    </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-2 justify-content-end">
                        <Link to="/user"> <button type="submit" className="btn  btn-danger d-block text-center">Login</button></Link>
                        </div>
                    </div>
                    
                    {/* <div className="row  mt-3  text-center">
                        <div className="col-md-12 ">
                            <input type="checkbox" id="brand1" value=""/>
                            <label for="brand1" className=" mx-auto ">
                               Remember me?</label>
                        </div>
                   </div>  */}
                   {/* <div className="row my-3">
                        <div className="col-md-12  text-center">
                            <a href="#" className="  ">Forgot Password?</a>
                        </div>
                        </div> */}
                    <p className="text-center dont-do  my-4 mb-5">Don't have an account?
                       <Link to="/register"> <a href="register.html" className="font-weight-bold text-li">
                            Register Now</a></Link>
                    </p>
                    </div>
                    </div>
            </div>
            {/* <!-- //login --> */}
        </>
    )
}