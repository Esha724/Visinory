export default function Pricing(){
    return(
        <>
         {/* <!-- ======= Pricing Section ======= --> */}
    <section id="pricing" className="pricing section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Pricing</h2>
          <p>Easily organize your projects and tasks.Start from Rs.0 / Month.</p>
          <p>And for access more features Purchase Business or Developer pack according to your need. </p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="box" data-aos="fade-up" data-aos-delay="100">
              <h3>Free</h3>
              <h4><sup>Rs.</sup>0<span> / month</span></h4>
              <ul>
                <li>Unlimited Tasks</li>
                <li>Unlimited projects</li>
                <li>Project Overview</li>
                <li className="na">Milestones</li>
                <li className="na">Private team & projects</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box featured" data-aos="fade-up" data-aos-delay="200">
              <h3>Business</h3>
              <h4><sup>Rs.</sup>999<span> / month</span></h4>
              <ul>
                <li>Unlimited Tasks</li>
                <li>Unlimited projects</li>
                <li>Project Overview</li>
                <li>Milestones</li>
                <li className="na">Private team & projects</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <h3>Developer</h3>
              <h4><sup>Rs.</sup>1499<span> / month</span></h4>
              <ul>
                <li>Unlimited Tasks</li>
                <li>Unlimited projects</li>
                <li>Project Overview</li>
                <li>Milestones</li>
                <li>Private team & projects</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Pricing Section --> */}
        </>
    )
}