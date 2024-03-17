export default function About(){
    return(
        <>
         {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>This is a ProjectManagement System</h3>
              <p>
              we implement a system in which we can manage all the tracks about the projects which is onging within an organization.
              </p>
              <a href="#" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>About Tasks</h4>
                  <p>we implement a system in which we can manage all the tracks about the projects which is onging within an organization.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>About Teams</h4>
                  <p>we implement a system in which we can manage all the tracks about the projects which is onging within an organization.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-images"></i>
                  <h4>Our Blogs</h4>
                  <p>we implement a system in which we can manage all the tracks about the projects which is onging within an organization.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-shield"></i>
                  <h4>About Security</h4>
                  <p>we implement a system in which we can manage all the tracks about the projects which is onging within an organization.</p>
                </div>
              </div>
            </div>
            {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}
</>
    )
}