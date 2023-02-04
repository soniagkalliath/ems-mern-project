const db = require("./db");
const shortid = require("shortid");

//all-emp api

const allEmp = () => {
  return db.Employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        allEmployees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No data is present",
      };
    }
  });
};

//addEmp

const addEmp = (empName,empAge,empDesg,empSalary) => {
  console.log(shortid.generate());
  // PPBqWA9
  id = shortid.generate();
  return db.Employee.findOne({
    id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "Data are already exist.",
      };
    } else {
      const newEmp = new db.Employee({
        id,
        uname: empName,
        age: empAge,
        desg: empDesg,
        salary: empSalary
      })
      newEmp.save()
      return {
        statusCode: 200,
        message: "New data added successfullyy"
      };
    }
  });
};

const removeEmp= (id)=>{
    return db.Employee.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return {
                statusCode: 200,
                message: "Data removed successfully"
              }; 
        }
        else {
            return {
              statusCode: 404,
              message: "No data is present",
            };
          }
    })
}

//editEmp
const editEmp = (id,empName,empAge,empDesg,empSalary)=>{
    return db.Employee.findOne({
        id,
      }).then((result)=>{
        if (result) {
            result.id = id
            result.uname = empName
            result.age = empAge
            result.desg = empDesg
            result.salary = empSalary
            result.save()
            return {
                statusCode: 200,
                message: "Data updated successfully"
              };
          }
          else{
            return {
                statusCode: 404,
                message: "Data not present.",
              };
          }
      })
}

module.exports = {
  allEmp,
  addEmp,
  removeEmp,
  editEmp
};
