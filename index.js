const express=require('express');
const bodyparser = require ('body-parser');
const app=express();

const port = process.env.PORT||5000;
// parse request data contest type application/x-www-force- rulencoded
 app.use (bodyparser.urlencoded({extended: true}));

 // parse request data contest type application /json
 app.use(bodyparser.json());



//import employee router
const employeeRoutes =require('./src/routes/employee.route');
//create employee routes
app.use('/api/v1/employee',employeeRoutes);



app.get('/', (req,res)=>{
    res.send('Hello world');
});

app.listen(port,()=>{
    console.log(' Server is running at port ${5000}');
});