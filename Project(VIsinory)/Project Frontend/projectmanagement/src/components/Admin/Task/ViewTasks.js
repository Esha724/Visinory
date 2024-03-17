import { Link } from "react-router-dom"

export default function ViewTask(){
    const task=[
        {
            Task_Name:"Design Frontend",
            Status:"Completed",
            Assignee:"John",
            Due_Date:"March 31, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Backend",
            Status:"In Progress",
            Assignee:"Alex",
            Due_Date:"June 15, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Frontend",
            Assignee:"John",
            Status:"Completed",
            Due_Date:"March 31, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Backend",
            Status:"In Progress",
            Assignee:"Alex",
            Due_Date:"June 15, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Frontend",
            Assignee:"John",
            Status:"Completed",
            Due_Date:"March 31, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Backend",
            Status:"In Progress",
            Assignee:"Alex",
            Due_Date:"June 15, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Frontend",
            Assignee:"John",
            Status:"Completed",
            Due_Date:"March 31, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Backend",
            Status:"In Progress",
            Assignee:"Alex",
            Due_Date:"June 15, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Frontend",
            Assignee:"John",
            Status:"Completed",
            Due_Date:"March 31, 2023",
            Type:"Programming",
        }, {
            Task_Name:"Design Backend",
            Status:"In Progress",
            Assignee:"Alex",
            Due_Date:"June 15, 2023",
            Type:"Programming",
        },
    ]
    return(
        <>
         <div className="containerfluid table-responsive mt-5 p-5">
            <h1 className="text-center mt-5 py-5 text-dark display-1 fw-bold" style={{backgroundImage:"url('/assets/img/bg/taskbg.jpg')",textShadow:" 2px 4px 10px #FFFFFF"}} >Tasks</h1>
                <table className="table table-bordered table-hover table-striped mt-4 table-light">
                    <thead className="m-5">
                        <tr className="table-secondary">
                            <th>Sr.No</th>
                            <th>Task Name</th>
                            <th>Status</th>
                            <th> Assignees</th>
                            <th> Type</th>
                            <th>Due Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        {task.map((el,index)=>(
                            <tr  key={index} >
                                <td>{index+1}</td>
                                <td>{el. Task_Name}</td>
                                <td>{el.Status}</td>
                                <td>{el.Assignee}</td>
                                <td>{el.Type}</td>
                                <td>{el.Due_Date}</td>
                                <td>
                                <Link to="/admin/edittask"><img src={"/assets/img/edit.png"} style={{width:"20px"}} /></Link>
                                </td>
                                <td>
                                <img src={"/assets/img/delete.png"} style={{width:"40px"}} />
                                </td>
                            </tr>
                        ))}  
                </table>
            </div>
        </>
    )
}