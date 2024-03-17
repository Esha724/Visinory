import { Link } from "react-router-dom";

export default function(){
    return(
        <>
        {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Visinory<span>.</span></h3>
        <p>
          Jalandhar <br/>
          Punjab,  144008<br/>
          India <br/><br/>
          <strong>Phone:</strong> +91 7970328651<br/>
          <strong>Email:</strong> eshakumari724@.com<br/>
        </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <Link to="/"><a href="#">Home</a></Link></li>
          <li><Link to="/about"><i className="bx bx-chevron-right"></i> <a href="#">About us</a></Link></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div>

      {/* <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div> */}

    </div>
  </div>
</div>

<div className="container d-md-flex py-4">

  <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
      &copy; Copyright <strong><span>Visinory</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* <!-- All the links in the footer should remain intact. --> */}
      {/* <!-- You can delete the links only if you purchased the pro version. --> */}
      {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
      {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/presento-bootstrap-corporate-template/ --> */}
    </div>
  </div>
  <div className="social-links text-center text-md-end pt-3 pt-md-0">
    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
  </div>
</div>
</footer>
{/* <!-- End Footer --> */}</>
    )
}