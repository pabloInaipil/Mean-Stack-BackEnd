const employeesCtrl = {}

const { restart } = require('nodemon')
const Employee = require('../models/Employee')

employeesCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find()
    res.json(employees)
};
employeesCtrl.createEmployees = async(req, res) => {
    const newEmployee = new Employee(req.body)

    await newEmployee.save()

    res.send({ message: 'Employee Created' });
};



employeesCtrl.getEmployee = async(req, res) => {

    const employee = await Employee.findById(req.params.i)
    res.send(employee);

};



employeesCtrl.editEmployees = async(req, res) => {

    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Employee Update' })


};


employeesCtrl.deleteEmployees = async(req, res) => {

    await Employee.findByIdAndDelete(req.params.id)
    res.json({ status: 'Employee Delete' })

};
module.exports = employeesCtrl;