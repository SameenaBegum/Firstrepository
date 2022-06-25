const mysql=require ('mysql');
//create my sql connection 
const dbConn=mysql.createConnection({
    host:'localhost',
    user : 'root' ,
    password:'',
    database:'crudd',
    port:3307,
    insecureAuth : true
});
 
dbConn.connect(function(error){
    if (error)throw error;
    console.log('Database is conected successfully');
});
module.exports=dbConn;