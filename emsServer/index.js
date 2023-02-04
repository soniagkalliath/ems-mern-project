const express = require('express')
const cors = require('cors')
const dataService = require('./services/data')

const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

server.listen(5000,()=>{
    console.log(`EMS server is listening at port number 5000`);
})


//all-emp Api
server.get('/all-employees',(req,res)=>{
    dataService.allEmp()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//add-emp Api
server.post('/add-employee',(req,res)=>{
    dataService.addEmp(req.body.name,req.body.age,req.body.desg,req.body.salary)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//edit-emp Api
server.post('/edit-employee',(req,res)=>{
    dataService.editEmp(req.body.id,req.body.name,req.body.age,req.body.desg,req.body.salary)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//remove-emp Api
server.delete('/delete-employee/:id',(req,res)=>{
    dataService.removeEmp(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})