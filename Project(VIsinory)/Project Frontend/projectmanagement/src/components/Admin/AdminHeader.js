import { Link } from "react-router-dom";

export default function AdminHeader(){
    return(
        <>
          <header id="header" className="fixed-top d-flex align-items-center  bg-dark" >
    <div className="container d-flex align-items-center ">
      <h1 className="logo me-auto "><a href="index.html " className=" text-white fw-bold ">Visinory<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}

      <nav id="navbar" className="navbar order-last order-lg-0 text-white">
        <ul>
          <li><Link to="/admin"><a className="nav-link scrollto text-white" href="#team">Dashboard</a></Link></li>
          <li className="dropdown text-white"><a href="#"><span className=" text-white">Project</span> </a>
            <ul>
              <li><Link to="addproject"><a className="nav-link scrollto " href="#">Add Project</a></Link></li>
              <li><Link to="project"><a className="nav-link scrollto" href="#">View Project</a></Link></li>
            </ul>
          </li>
           <li className="dropdown text-white"><a href="#"><span className=" text-white">Task</span>  </a>
            <ul>
              <li><Link to="addtask"><a href="#">Add Task</a></Link></li>
              <li><Link to="task"><a href="#">View Task</a></Link></li>
            </ul>
          </li> 
          <li className="dropdown text-white"><a href="#"><span className=" text-white">Employee</span>  </a>
            <ul>
              <li><Link to="addemployee"><a href="#">Add Employee</a></Link></li>
              <li><Link to="employee"><a href="#">View Employee</a></Link></li>
            </ul>
          </li> 
          <li><Link to="enquiry"><a className="nav-link scrollto text-white" href="#team">Enquiry</a></Link></li>     
          <li><Link to="/adminlogin"><a className="get-started-btn px-4 nav-link scrollto text-white" href="#team">Log Out</a></Link></li>      
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
  </header></>
    )
}