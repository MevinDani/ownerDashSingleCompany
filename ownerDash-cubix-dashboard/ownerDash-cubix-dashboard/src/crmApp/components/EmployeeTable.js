import React from 'react'
import './EmployeeTable.css'
import { Oval } from 'react-loader-spinner'


const EmployeeTable = () => {

    const empData = [
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "jobTitle": "Software Engineer",
            "department": "Engineering",
            "manager": "Jane Smith"
        },
        {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "jobTitle": "Engineering Manager",
            "department": "Engineering",
            "manager": "David Johnson"
        },
        {
            "name": "David Johnson",
            "email": "david.johnson@example.com",
            "jobTitle": "CTO",
            "department": "Executive",
            "manager": null
        },
        {
            "name": "Alice Brown",
            "email": "alice.brown@example.com",
            "jobTitle": "Marketing Specialist",
            "department": "Marketing",
            "manager": "Bob Wilson"
        },
        {
            "name": "Bob Wilson",
            "email": "bob.wilson@example.com",
            "jobTitle": "Marketing Manager",
            "department": "Marketing",
            "manager": "David Johnson"
        },
        {
            "name": "David Johnson",
            "email": "david.johnson@example.com",
            "jobTitle": "CTO",
            "department": "Executive",
            "manager": null
        },
        {
            "name": "Alice Brown",
            "email": "alice.brown@example.com",
            "jobTitle": "Marketing Specialist",
            "department": "Marketing",
            "manager": "Bob Wilson"
        },
        {
            "name": "Bob Wilson",
            "email": "bob.wilson@example.com",
            "jobTitle": "Marketing Manager",
            "department": "Marketing",
            "manager": "David Johnson"
        }
    ]

    return (
        <div className='EmployeeTableWrapper'>
            <div className='EmployeeTableCont'>
                <div class="card" id='TodaysFollowCard'>
                    <div class="card-body">

                        <div className='SalesCardHeader'>
                            <div className='SalesText'>Employee List</div>
                        </div>

                        <div className='SalesTableCont' id='SalesTableCont'>
                            <div className='Table-Responsive'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Job Title</th>
                                            <th>Department</th>
                                            <th>Manager</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            empData && empData.length > 0 ? (
                                                empData.map((item, index) => (
                                                    <>
                                                        <tr key={index} className='mainTr'>
                                                            <td >{index + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td >{item.email}</td>
                                                            <td >{item.jobTitle}</td>
                                                            <td >{item.department}</td>
                                                            <td >{item.manager}</td>
                                                        </tr>
                                                    </>
                                                ))
                                            ) : (
                                                empData === null ? (
                                                    <tr style={{ display: "flex", justifyContent: "center" }}>
                                                        <td colSpan='7'>
                                                            <Oval
                                                                visible={true}
                                                                height="50"
                                                                width="50"
                                                                color="#4fa94d"
                                                                radius="6"
                                                                ariaLabel="three-dots-loading"
                                                                wrapperStyle={{}}
                                                                wrapperClass=""
                                                            />
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    <tr>
                                                        <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</td>
                                                    </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable