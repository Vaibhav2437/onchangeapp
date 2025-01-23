import React, { useState } from 'react'


const Employee = () => {
    const [empName,setEmpName] = useState('')
    const [empEmail,setEmpEmail] = useState('')
    const [empcontact,setEmpContact] = useState('')
    const [empCompany,setEmpComapny] = useState('')
    const [empRole,setEmpRole] = useState('')
    const [todo,setTodo] = useState([])

    const empname =(event) =>{
        const emp_name = event.target.value
        setEmpName(emp_name)
    }
    const empemail =(event) =>{
        const emp_email = event.target.value
        setEmpEmail(emp_email)
    }
    const empContact =(event) =>{
        const emp_Contact = event.target.value
        setEmpContact(emp_Contact)
    }
    const empcompany =(event) =>{
        const emp_company = event.target.value
        setEmpComapny(emp_company)
    }
    const emprole =(event) =>{
        const emp_role = event.target.value
        setEmpRole(emp_role)
    }
    const datahandler =()=>{
        if(empName.trim() && empEmail.trim() && empcontact.trim() && empCompany.trim()&&empRole.trim()){
            
            setTodo([...todo,{empName,empEmail,empcontact,empCompany,empRole}])
            setEmpName('')
            setEmpEmail('')
            setEmpContact('')
            setEmpComapny('')
            setEmpRole('')
        }else{
            alert('All Fields are Required')
        }

    }
    const printDetails =(Employee) =>{
        const printData = window.open("","","width:700 height:500")
        printData.document.write(`<html><head><title>Customer Details</title></head>`)
        printData.document.write(`<body>
                <h1>Employee Details</h1>
                <h2>Name :${Employee.empName}</h2>
                <h2>Email : ${Employee.empEmail}</h2>
                <h2>Contact ${Employee.empcontact}</h2>
                <h2>Company Name ${Employee.empCompany}</h2>
                <h2>Role : ${Employee.empRole}</h2>
            </body></html>`)
            printData.print();
            printData.close();
    }
  return (
    <div>
        <h1>Employee Management App</h1>
        <div className='bg-warning w-50 mx-auto p-4 rounded-4'>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter Full Name'
                className='form-control'
                value={empName}
                onChange={empname}
                />
            </div>
            <div className='mb-3'>
                <input type='email'
                placeholder='Enter Email'
                className='form-control'
                value={empEmail}
                onChange={empemail}
                />
            </div>
            <div className='mb-3'>
                <input type='tel'
                placeholder='Enter Contact'
                className='form-control'
                value={empcontact}
                onChange={empContact}
                />
            </div>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter Company Name'
                className='form-control'
                value={empCompany}
                onChange={empcompany}
               
                />
            </div>
            <div className='mb-3'>              
                <select className='form-control'
                value={empRole} onChange={emprole}>
                    <option value=''>Select Role</option>
                    <option value='Backend Developer'>Backend Developer</option>
                    <option value='Frontend Developer'>Frontend Developer</option>
                    <option value='Full Stack Developer'>Full Stack Developer</option>
                    <option value='Devops'>Devops</option>
                </select>
            </div>
            <div>
                <button className='btn btn-success w-50' onClick={datahandler} >Add Data</button>
            </div>
        </div>
        <table className='table w-75 mx-auto table-success mt-3'>
            <thead>
                <tr>
                    <th>Emp_ID</th>
                    <th>Emp Name</th>
                    <th>Emp Email</th>
                    <th>Emp Contact</th>
                    <th>Company Name</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todo.map((item,index)=>{
                        return(
                            <tr>
                                <td>{index +1}</td>
                                <td>{item.empName}</td>
                                <td>{item.empEmail}</td>
                                <td>{item.empcontact}</td>
                                <td>{item.empCompany}</td>
                                <td>{item.empRole}</td>
                                <td><button className='btn btn-primary' onClick={()=>printDetails(item)}>Print</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}


export default Employee
