var dbConn=require('../../config/db.config');

var Employee=  function(employee) {
    this.first_name =employee.first_name;
    this.last_name=employee.last_name;
    this.phonenumber=employee.phonenumber;
   // this.created_at=new date ();
   // this. updated_at=new date();
}
//get all employees
Employee.getAllEmployees=(results)=>{
    dbConn.query('SELECT * FROM employees',(err,res)=>{
        if(err){
            console.log('Error while fetching employees',err)
            results(null,err);
        } 
        else{
            console.log('Employees fetch successfully')
            results(null,res);  
             }
    })

}
//get employee by id from db
Employee.getEmployeeByID = ( id, results) =>{
    dbConn .query (' SELECT * FROM employees WHERE id =?',id ,(err,res) =>{
        if (err){
            console.log('Error while fetching employee by id', err);
            results(null , err);
        }
        else{
            console.log('Employee created successfully')
            results(null, res);
        }
    })
}
        // create new employee
        Employee.createEmployee = (employeeReqData , results) =>{
            dbConn . query ('INSERT INTO employees SET ?' , employeeReqData ,(err , res) =>{
                if(err){
                    console.log('Error while inserting data')
                    results(null,err);
                }
                else{
                    console.log('Employee created successfully');
                    results(null,res);
                }
            })
        }
        // update employee
        Employee.updateEmployee = (id,employeeReqData, results) =>{
            dbConn.query("UPDATE employees SET first_name=?,last_name=?,phonenumber=?,WHERE id = ?",[employeeReqData.first_name,employeeReqData.last_name,employeeReqData.phonenumber,id],(err,res)=>{
                if (err){
                    console.log('Error while updating the  employee');
                    results(null,err)
                }
                else{
                    console.log('Employee updated successfully');
                    results(null,res)
                }

            });
        }
            // hard delete 
            Employee.deleteEmployee = (id, results) =>{
                dbConn.query('DELETE FROM employees WHERE id =?',[id],(err,res) =>{
                   if(err){
                        console.log('Error while deleting the employee');
                        results(null,err)
                    }
                   else{
                      results(null,res)
                   }
                   })
                }
                   
                  //dbConn.query('UPDATE employees SET is_deleted =?', [1,id],(err,res) =>{
                  //  if(err){
                      //  console.log('Error while deleting employee');
                      //  results(null,err)
                  //  }else{
                        //console.log('Employee deleted successfully');
                       // results(null,res)                    }
                    
                 // })
               // }
                
                module.exports=Employee;