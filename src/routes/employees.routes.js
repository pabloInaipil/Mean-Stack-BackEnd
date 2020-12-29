//creación enrutador URLs

const { Router } = require('express');
const router = Router();

const employeesCtrl = require('../controllers/employees.controller.js');





router.get('/', employeesCtrl.getEmployees);

router.post('/', employeesCtrl.createEmployees);

router.get('/:i', employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployees);

router.delete('/:id', employeesCtrl.deleteEmployees);


module.exports = router;