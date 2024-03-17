import { Link } from "react-router-dom";

export default function UserHeader(){
    return(
        <>
          <header id="header" className="fixed-top d-flex align-items-center bg-dark bg-gradient">
    <div className="container d-flex align-items-center ">
      <h1 className="logo me-auto "><a href="index.html " className="text-white">Visinory<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {/* <li><Link to="/"><a className="nav-link scrollto active" href="#hero">Home</a></Link></li> */}
          <li><Link to="/user"><a className="nav-link scrollto text-white" href="#team">Dashboard</a></Link></li>
          <li><Link to="userproject"><a className="nav-link scrollto text-white" href="#team">Project</a></Link></li>

           <li className="dropdown"><Link to="usertask"><a href="#"><span className="text-white">Task</span>  </a></Link>
            <ul>
              <li><Link to="usertask"><a href="#">Due Task</a></Link></li>
              <li><Link to="task"><a href="#">View Task</a></Link></li>
            </ul>
          </li>  
          {/* <li><Link to="employee"><a className="nav-link scrollto" href="#team">Employee</a></Link></li> */}
          <li><Link to="userenquiry"><a className="nav-link scrollto text-white" href="#team">Enquiry</a></Link></li>     
          <li><Link to="/userlogin"><a className="get-started-btn px-4 nav-link scrollto text-white" href="#team">Log Out</a></Link></li>      
        </ul>
            
                      {/* <li><Link to="/about"><a className="nav-link scrollto" href="#about">About</a></Link></li> */}
                      {/* <li><Link to="/contact"><a className="nav-link scrollto" href="#services">Contact</a></Link></li> */}
                      {/* <li><Link to="/register"><a className="get-started-btn px-4 nav-link scrollto" href="#team">Register</a></Link></li> */}             
              {/* <li><Link to="/dashboard"><a className="nav-link scrollto" href="#team">Dashboard</a></Link></li> */}
              {/* <li><Link to="/project"><a className="nav-link scrollto" href="#team">Project</a></Link></li> */}
         <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

      {/* <a href="#about" className="get-started-btn scrollto">Get Started</a> */}
    </div>
  </header>
        </>
    )
}