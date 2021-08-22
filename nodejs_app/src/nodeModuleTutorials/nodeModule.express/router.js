// REST API

//import { Router } from 'express';
const { Router } = require('express');
import { employees, addNewEmployee } from './employeeList';

const router = Router();

/* For selecting Employee
 * Description: for selecting all employee use Get just type in the url this
 *          http://127.0.0.1:5000/api/employees/
 */
router.get('/api/employees', (req, res) => {
    res.json(employees);
});

/* For selecting Employee
 * Description: for selecting an employee use Get just type in the url this
 *          http://127.0.0.1:5000/api/employees/1 <- with id
 */
router.get('/api/employees/:id', (req, res) => {
    const found = employees.filter(employee => employee.id == req.params.id);
    if(found.length > 0){
        res.json(found);
    }else{
        res.status(400).send(`no employee found with this id = ${req.params.id}`);
    }
})

/* For adding new Employee
 * Description: for adding new employee use Postman
        add header "Content-type: application/json"
        add the object to be send as data in the body->raw
 */
router.post('/api/employees', (req, res) => {
    const newEmployee = {
        id: employees.length+1,
        name: req.body.name,
        age: req.body.age,
        position: req.body.position
    }
    addNewEmployee(newEmployee);
    res.json(employees);
});

/* For updating an employee
 * Description: for updating an employee use Postman
        add header "Content-type: application/json"
        add the object to be send as data in the body->raw
        add employee number in the url for ex. /api/employees/1
 */
router.put('/api/employees/:id', (req, res) => {
    const found = employees.filter(employee => {
        if(employee.id == req.params.id){
            employee.name = req.body.name;
            employee.age = req.body.age;
            employee.position = req.body.position;
            return employee;
        }
    });
    if(found.length>0)
        res.json({message: 'Employee Updated', employees});
    else
        res.status(400).json(`no employee found with this id = ${req.params.id}`);
});

/* For deleting an employee
 * Description: for deleting an employee use Postman
        add header "Content-type: application/json"
        add the object to be send as data in the body->raw
        add employee number in the url for ex. /api/employees/1
 */
router.delete('/api/employees/:id', (req, res) => {
    const found = employees.filter(employee => {
        if(employee.id == req.params.id){
            employee.status = 'inactive';
            return employee;
        }
    });
    if(found.length > 0)
        res.json({message: 'Employee Deleted', employee: found});
    else
        res.status(400).json(`no employee found with this id = ${req.params.id}`);
});

// note
// array.map
// array.filter <- can return a value
// array.forEach

module.exports = router;