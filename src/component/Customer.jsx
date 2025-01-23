import React, { useState } from 'react'


const Customer = () => {
   const [formData,setFromData] = useState({
        name:'',
        email:'',
        contact:'',
        city :'',
        address :''
   })
   const [entry,setEntry] = useState([])
   const handleChange =(e)=>{
    setFromData({...formData,[e.target.name]:e.target.value})

   }
   const addData =()=>{
    if(formData.name && formData.email && formData.contact && formData.city && formData.address){
        setEntry([...entry,formData])
        setFromData({
            name:'',
            email:'',
            contact:'',
            city :'',
            adddress :''
        })
    }else{
        alert('All Fields Required')
    }
    }
  return (
    <div>
        <h1>Customer details</h1>
        <div className='bg-warning w-50 mx-auto p-4 rounded-4'>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter Full Name'
                className='form-control'
                name ='name'
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <input type='email'
                placeholder='Enter Email'
                className='form-control'
                name ='email'
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <input type='tel'
                placeholder='Enter Contact'
                className='form-control'
                name = 'contact'
                value={formData.contact}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter City'
                className='form-control'
                name = 'city'
                value={formData.city}
                onChange={handleChange}
                
                />
            </div>
            <div className='mb-3'>              
                <textarea cols={42} rows={2} placeholder='Enter Address' className='rounded-3 w-100' name='address'
                value={formData.address}
                onChange={handleChange}></textarea>
            </div>
            <div>
                <button className='btn btn-success w-50'  onClick={addData}>Add Data</button>
            </div>
            
        </div>
        <table className='table w-100 mx-auto table-dark text-light mt-3'>
            <thead>
                <tr>
                    <th>Customer_ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    entry.map((customer,index)=>{
                        return(
                            <tr>
                                <td>{index +1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.contact}</td>
                                <td>{customer.city}</td>
                                <td>{customer.address}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
        
  )
}


export default Customer;
