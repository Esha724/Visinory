import { Outlet } from "react-router-dom";
import AdminFooter from "../Admin/AdminFooter";
import UserHeader from "./UserHeader";

export default function UserMaster(){
    return(
        <>
        <UserHeader/>
        <Outlet/>
        <AdminFooter/>
        </>
    )
}