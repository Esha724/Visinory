export default function ProjectDetail(){
    return(
        <>
        <div className="container mt-5 pt-5 ">
           <div className="row my-5  justify-content-center ">
            <div className="col-md-10 border ps-5 mt-3">
                <h2 className="text-center mt-3 display-5 fw-bold">Project Details</h2>
                <img className="rounded mx-auto d-block mt-4 " src="/assets/img/detail.png" style={{width:"100px"}}/>
            <div className="row mt-3 ">
                <div className="col-md-2"><h5>Project Title:</h5></div>
                <div className="col-md-8"><p>e-Learning platform</p></div>
            </div>
            <div className="row mt-3">
                <div className="col-md-2"><h5>Client Name:</h5></div>
                <div className="col-md-8"><p>Alex Easton</p></div>
            </div>
            <div className="row mt-3">
                <div className="col-md-2"><h5>Project Description:</h5></div>
                <div className="col-md-8"><p>In this project, you will build a shareable e-learning platform using cloud computing infrastructure for online learning. This e-learning platform powered by cloud computing would allow the independent Learning Management Systems (LMS) embedded in various e-Learning standards to share their learning objects, modules, and content.</p></div>
            </div>
            <div className="row mt-3">
                <div className="col-md-2"><h5>Project Goals/Purpose:</h5></div>
                <div className="col-md-8"><p>Enhance the quality of learning and teaching.<br/>
                            Meet the learning style or needs of students.<br/>
                            Improve the efficiency and effectiveness.<br/>
                            Improve user-accessibility and time flexibility to engage learners in the learning process.</p></div>
            </div>
            <div className="row mt-3">
                <div className="col-md-2"><h5>Project Duration:</h5></div>
                <div className="col-md-8"><p>6 Months,  (March 15, 2023  to  Aug 15, 2023 )</p></div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-md-2"><h5>Project Budget:</h5></div>
                <div className="col-md-8"><p>Rs. 1,00,000,000.</p></div>
            </div>
            </div>
           </div>
        </div>
        </>
    )
}