import { Link } from "react-router-dom";

export default function AdminLogin(){
    return(
        <>
         
    <div className="container mt-5 pt-5 ">
        <div className="row ">
            <div  className="col-md-5 mt-5 pt-3" >
                <img className="" src="/assets/img/bg/adminlogin.jpg"/>
            </div>
        <div className=" col-md-7 my-5">
            <h1 className="text-center  mt-5">Admin Login</h1>
            <div className="row justify-content-center mt-4 ">
                    <div className="col-md-2 ">
                    <img src="assets/img/profile.png" className="img-fluid rounded-start mt-3" alt="..." style={{width:"100px"}}/>
                    </div>
            </div>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row mt-3 justify-content-center ">
                    <div className=" col-md-8 form-group justify-content-center mb-2">
                    <label className="col-form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Admin@email.com" name="email" id="email"
                    required/>
                </div>
                </div>
               <div className="row mt-3 justify-content-center">
                    <div className="col-md-8 form-group justify-content-center">
                        <label className="col-form-label">Password</label>
                        <input type="password" className="form-control" placeholder="*****" name="password" id="password" required/>
                    </div>
               </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-2 justify-content-end mb-5 mt-3">
                        <Link to="/admin"> <button type="submit" className="btn  btn-danger d-block text-center">Login</button></Link>
                    </div>
                </div>
                    </form>
                    
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
                    {/* <p className="text-center dont-do  my-3 mb-5">Don't have an account?
                       <Link to="/register"> <a href="register.html" className="font-weight-bold text-li">
                            Register Now</a></Link>
                    </p> */}
                    </div>
                    </div>
            </div>
        </>
    )
}