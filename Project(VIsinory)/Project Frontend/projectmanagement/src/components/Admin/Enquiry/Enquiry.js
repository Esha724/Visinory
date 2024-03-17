export default function Enquiry(){
    const enquiry=[
        {
            Name:"Alex",
            Email:"alex@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Joe",
            Email:"joe@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Alex",
            Email:"alex@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Joe",
            Email:"joe@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Alex",
            Email:"alex@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Joe",
            Email:"joe@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Alex",
            Email:"alex@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  {
            Name:"Joe",
            Email:"joe@gmail.com",
            Subject:"About Bug",
            Message:" flaw or fault in the design"
        },  
    ]
    return(
        <>
        <div className="container-fluid table-responsive mt-5 p-5">
            <h1 className="text-center text-white display-2 fw-bold mt-5 py-5"  style={{backgroundImage:"url('/assets/img/bg/enquirybg.jpg')",textShadow:" 2px 4px 10px #FFFFFF"}}>Enquiry</h1>
                <table className="table table-bordered table-hover table-striped mt-5 ">
                    <thead>
                        <tr className="table-secondary">
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                        {enquiry.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el.Name}</td>
                                <td>{el.Email}</td>
                                <td>{el.Subject}</td>                               
                                <td>{el.Message}</td>                               
                            </tr>
                        ))}  
                </table>
            </div>
        </>
    )
}