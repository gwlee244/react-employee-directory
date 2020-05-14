
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Search from "./Search";

function Employee() {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        loadEmployees() 
    }, []);

    function loadEmployees() {
        API.searchAll()
            .then(function (res) {
                setFilter(res.data.results);
                setEmployees(res.data.results);
            })
    }

    function showFemales() {
        let femaleEmp = filter.filter(employee => employee.gender === "female");
        setEmployees(femaleEmp);
        console.log(employees);
    }

    function showMales() {
        let maleEmp = filter.filter(employee => employee.gender === "male");
        setEmployees(maleEmp);
        console.log(employees);
    }

    function allEmp() {
        let all = filter;
        setEmployees(all);
    }

    return (
        <div className="container">
            <Search female={showFemales} male={showMales} all = {allEmp}/>
                
                
                <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> </th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                   {employees.map(employee => 
                    <tbody>
                        <tr key={employee.id}>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td><img src={employee.picture.thumbnail} alt={employee.name.first}/></td>
                        <td>{employee.gender}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        </tr>
                    </tbody>)}
                </table>
                
        </div>
    )
}

export default Employee;