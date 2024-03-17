const router=require('express').Router()

const usercontroller = require('../controllers/usercontroller')
router.post("/register", usercontroller.register)
router.post("/login", usercontroller.login)

router.use(require('../config/middleware'))

const departcontroller= require('../controllers/departmentcontroller')
router.post("/adddepartment",departcontroller.adddepartment)
router.post("/getalldepartment",departcontroller.getalldepartment)
router.post("/getsingledepartment",departcontroller.getsingledepartment)
router.post("/updatedepartment",departcontroller.updatedepartment)

const employeecontroller= require('../controllers/employeecontroller')
router.post("/addemployee",employeecontroller.addemployee)
router.post("/getallemployee",employeecontroller.getallemployee)
router.post("/getsingleemployee",employeecontroller.getsingleemployee)
router.post("/updateemployee",employeecontroller.updateemployee)

const projectcontroller = require('../controllers/projectcontroller')
router.post("/addproject", projectcontroller.addproject)
router.post("/getallproject", projectcontroller.getallproject)
router.post("/getsingleproject", projectcontroller.getsingleproject)
router.post("/updateproject", projectcontroller.updateproject)


const taskcontroller =require('../controllers/taskcontroller')
router.post("/addtask" ,taskcontroller.addtask)
router.post("/getalltask" ,taskcontroller.getalltask)
router.post("/getsingletask" ,taskcontroller.getsingletask)
router.post("/updatetask" ,taskcontroller.updatetask)

const enquirycontroller= require('../controllers/enquirycontroller')
router.post("/addenquiry", enquirycontroller.addenquiry)
router.post("/getallenquiry",enquirycontroller.getallenquiry)
router.post("/getsingleenquiry",enquirycontroller.getsingleenquiry)
router.post("/updateenquiry",enquirycontroller.updateenquiry)



module.exports = router

