exports.employees = [
    {
        id: 1,
        name: 'Jerard',
        age: 29,
        position: 'Team Lead Dev',
        status: 'active'
    }, {
        id: 2,
        name: 'Krizia',
        age: 21,
        position: 'Junior Dev',
        status: 'active'
    }, {
        id: 3,
        name: 'Reynan',
        age: 35,
        position: 'Junior Dev',
        status: 'active'
    }
]

exports.addNewEmployee = (newEmployee) =>{
    exports.employees = [...exports.employees, newEmployee];
}