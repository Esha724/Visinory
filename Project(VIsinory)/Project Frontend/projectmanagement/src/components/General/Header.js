import {Link} from "react-router-dom";
export default function Header(){
    return(
        <>
         {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top d-flex align-items-center  bg-light"  >
    <div className="container d-flex align-items-center bg-light">
      <h1 className="logo me-auto "><a href="index.html " >Visinory<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}

      <nav id="navbar" className="navbar order-last order-lg-0 ">
        <ul>
          <li><Link to="/"><a className="nav-link scrollto active " href="#hero">Home</a></Link></li>
          <li><Link to="/about"><a className="nav-link scrollto " href="#about">About</a></Link></li>
          <li><Link to="/contact"><a className="nav-link scrollto " href="#services">Contact</a></Link></li>
        
          <li><Link to="/userlogin"><a className="nav-link scrollto " href="#team">User Login</a></Link></li>
          <li><Link to="/adminlogin"><a className="nav-link scrollto " href="#team">Admin Login</a></Link></li>
          <li><Link to="/register"><a className="get-started-btn px-4 nav-link scrollto" href="#team">Register</a></Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      {/* <a href="#about" className="get-started-btn scrollto">Get Started</a> */}
    </div>
  </header>
  {/* <!-- End Header --> */}
  </>
    )
}