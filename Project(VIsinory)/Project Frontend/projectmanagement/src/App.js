import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom';
import Master from './components/General/Master';
import Home from './components/General/Basic/Home';
import About from './components/General/Basic/About';
import Contact from './components/General/Basic/Contact';
import Pricing from './components/Pricing';
import UserLogin from './components/General/Login/UserLogin';
import AdminLogin from './components/General/Login/AdminLogin';
import Register from './components/General/Login/Register';
import AdminDashboard from './components/Admin/AdminDashboard';
import Employee from './components/Admin/Employee/Employee';
import ViewTask from './components/Admin/Task/ViewTasks';
import ViewProject from './components/Admin/Project/ViewProject';
import AdminMaster from './components/Admin/AdminMaster';
import AddProject from './components/Admin/Project/AddProject';
import Enquiry from './components/Admin/Enquiry/Enquiry';
import AddTask from './components/Admin/Task/AddTask';
import UserMaster from './components/User/UserMaster';
import UserProject from './components/User/UserProject';
import ProjectDetail from './components/Admin/Project/ProjectDetails';
import UserTask from './components/User/Task/UserTask';
import UserEnquiry from './components/User/UserEnquiry';
import UserDashboard from './components/User/UserDashboard';
import AddEmployee from './components/Admin/Employee/AddEnmployee';
import EditProject from './components/Admin/Project/EditProject';
import EditTask from './components/Admin/Task/EditTask';
import EditEmployee from './components/Admin/Employee/EditEmployee';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Master/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/userlogin" element={<UserLogin/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
        <Route path="/admin" element={<AdminMaster/>}>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="project" element={<ViewProject/>}/>
          <Route path="addproject" element={<AddProject/>}/>
          <Route path="editproject" element={<EditProject/>}/>
          <Route path="projectdetail" element={<ProjectDetail/>}/>
          <Route path="task" element={<ViewTask/>}/>
          <Route path="addtask" element={<AddTask/>}/>
          <Route path="edittask" element={<EditTask/>}/>
          <Route path="employee" element={<Employee/>}/>
          <Route path="addemployee" element={<AddEmployee/>}/>
          <Route path="editemployee" element={<EditEmployee/>}/>
          <Route path="enquiry" element={<Enquiry/>}/>
        </Route>
        <Route path="/user" element={<UserMaster/>}>
          <Route path="/user" element={<UserDashboard/>}/>
          <Route path="userproject" element={<UserProject/>}/>
          <Route path="project" element={<ViewProject/>}/>
          <Route path="employee" element={<Employee/>}/>
          <Route path="usertask" element={<UserTask/>}/>
          <Route path="task" element={<ViewTask/>}/>
          <Route path="userenquiry" element={<UserEnquiry/>}/>
          <Route path="projectdetail" element={<ProjectDetail/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
