const Employee = require('../models/employee.model');
const EmployeeModel=require('../models/employee.model');

//get all employee list
exports.getEmployeelist=(req,res)=>{
   // console.log('All Employees list');
   EmployeeModel.getAllEmployees((err,employees)=>{
    console.log('We Are Here');
    if(err)
    res.send(err);
    console.log('Employees',employees);
    res.send(employees);
   })
}
// get employee by id
exports.getEmployeeByID = ( req,res ) =>{
   // console.log('get emp by id');
   EmployeeModel.getEmployeeByID(req .params .id,(err,employee) =>{
    if (err)
    res.send(err)
    console.log('single employee data', employee);
    res.send(employee)
     
   }) 

   }
   // create new employee
   exports.createNewEmployee = ( req ,res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqdata', employeeReqData);
    //check null
    if ( req.body.contructor && keys(req.body).length === 0){
        res.send (400).send( {success:false,message:'please fill the all fields'});
     }
     else{
      // console.log('valid data');
     }
        EmployeeModel.createEmployee(employeeReqData ,(err,employee ) =>{
            if(err)
                res.send(err)
                res.json({ status : true , message : 'Employee created successfully', data : employee });
            })
             } 
     
        
        // update employee
        exports.updateEmployee=(req,res)=>{
         const employeeReqData =new EmployeeModel(req.body);
         console.log('employeeReqData update', employeeReqData);
         //check null
         if(req.body.constructor && (req.body).length===0){
            res.send(400).send({success : false , message : 'please fill all the fields'})
         }
         else{
            console.log ('data')
          }
         EmployeeModel.updateEmployee(req.params.id, employeeReqData,(err,employee) =>{
            if(err)
            res.send(err)
            res.json({status:true,message:'Employee updated successfully'})
         })
        }
        // delete employee
        exports.deleteEmployee = (req,res) =>{
         EmployeeModel.deleteEmployee(req.params.id,(err,employee) =>{
            if(err)
            res.send(err)
            res.json({ sucess : true , message : ' Employee deleted successfully'});


         })
        }
        

