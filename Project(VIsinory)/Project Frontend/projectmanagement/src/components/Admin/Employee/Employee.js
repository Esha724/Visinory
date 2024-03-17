import { Link } from "react-router-dom"

export default function Employee(){
    const employee=[
        {
            employee_name:"Esha",
            employee_id:"7549504",
            join_date:"2020",
            department:"Research and development",
            image:"team-2.jpg"
        },
        {
            employee_name:"Anu",
            employee_id:"637402",
            join_date:"2021",
            department:"Management",
            image:"team-4.jpg"
        },
        {
            employee_name:"Anurag",
            employee_id:"641740",
            join_date:"2020",
            department:"Accounts and Finance",
            image:"team-1.jpg"
        },
        {
            employee_name:"Aditya",
            employee_id:"648416",
            join_date:"2021",
            department:"HR",
            image:"team-3.jpg"
        }
    ]
    return(
        <>
        <div className="container-fluid table-responsive mt-5 p-5">
            <h1 className="text-center text-white mt-5 fw-bold display-3 py-5" style={{backgroundImage:"url('/assets/img/bg/employeebg.jpg')",textShadow:" 2px 4px 10px #FFFFFF"}}>Employees</h1>
                <table className="table table-bordered table-hover table-striped mt-5">
                    <thead>
                        <tr className="table-secondary">
                            <th>Sr.No</th>
                            <th>Employee name</th>
                            <th>Employee Id</th>
                            <th>Join Date</th>
                            <th>Department</th>
                            <th>Profile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        {employee.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el.employee_name}</td>
                                <td>{el.employee_id}</td>
                                <td>{el.join_date}</td>
                                <td>{el.department}</td>
                                <td>
                                <img src={"/assets/img/team/"+`${el.image}`} style={{width:"100px"}} />
                                </td>
                                <td>
                               <Link to="/admin/editemployee"> <img src={"/assets/img/edit.png"} style={{width:"20px"}} /></Link>
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