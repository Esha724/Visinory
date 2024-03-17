export default function AdminFooter(){
    return(
        <>
       <footer id="footer" className="">

<div className="container d-md-flex py-4 mt-5" >

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
        </>
    )
}