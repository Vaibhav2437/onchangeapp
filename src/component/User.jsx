import {useState } from "react";

const User = ()=>{
    const [fullname,setFullname] = useState('')
    const [errorname,setErrorname] = useState('')

    const [user,setUser] = useState('')
    const [errorUser, setErrorUser] = useState('')

    const [email, setEmail] = useState('')
    const [errorEmail,setErrorEmail] =useState('')

    const [pass,setPass] = useState('')
    const [errorPass,setErrorPass] = useState('')
    
    const [number,setNumber] = useState('')
    const [errornumber,setErrorNumber] =useState('')

    const fullName =(event)=>{
        const input= event.target.value
        setFullname (input)

        const  name = /^[A-Z][A-Za-z\s]+$/.test(input) 
        if(!name){
            setErrorname('Start with Uppercase letter,Uppercase, lowercase, space Number are not allowed ')
        }else{
            setErrorname('Name is Valid')
        }
    }
    const userName =(event)=>{
        const input = event.target.value
        setUser (input)
        const uname = /^[A-Z][A-Za-z\d]{6,}$/.test(input)
        if(!uname){
            setErrorUser('Username must start with an uppercase letter, one number, and be at least 6 characters long.')
        }else{
            setErrorUser('User Name Valid')
        }
    }
    const correctEmail =(event)=>{
        const input =event.target.value
        setEmail (input)
        const emailv = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
        if(!emailv){
            setErrorEmail('Email (required, proper format)')
        }else{
            setErrorEmail('Email is Valid')
        }
    }

    const password =(event) =>{
        const input = event.target.value
        setPass (input)
        const validpass = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(input)
        if(!validpass){
            setErrorPass('Password must be at least 8 characters, include one uppercase letter, and one special character')
        }else{
            setErrorPass('Valid Password')
        }
    }

    const vnumber =(event)=>{
        const input =event.target.value;
        setNumber(input)
        const num = /^\d+$/.test(input)
        if(!num){
            setErrorNumber('only numbers');
        }else{
            setErrorNumber('Number is Valid')
        }
    }
   
    return(
        <div className="bg-dark text-light vh-100 d-flex align-items-center">
            <div className=" w-50 mx-auto ">
            <h1 className="text-center text-danger mb-5">Register Here</h1>
            <div className="mb-3 text-start">
                <input type="text" placeholder="Enter Full Name" className="form-control mb-1" value={fullname} onChange={fullName}/>
                <span style={{color : errorname === 'Name is Valid' ? 'green' : 'red' }}>{errorname}</span>
            </div>
            
            <div className="mb-3 text-start">
                <input type="text" placeholder="Enter Username" className="form-control mb-1" value ={user} onChange={userName}/>
                <span style={{color : errorUser === 'User Name Valid' ? 'green' : 'red' }}>{errorUser}</span>
            </div>

            <div className="mb-3 text-start">
                <input type="text" placeholder="Enter Email" className="form-control" value={email} onChange={correctEmail}/>
                <span style={{color : errorEmail === 'Email is Valid' ? 'green' : 'red' }}>{errorEmail} </span>
            </div>

            <div className="mb-3 text-start" aria-label="Default select example">
                <select className="from-select w-100 p-2">
                    <option defaultChecked>Select Job Role</option>
                    <option>FULL STACK DEVELOPER</option>
                    <option>MERN STACK</option>
                    <option>JAVA DEVELOPER</option>
                    <option>REACT DEVELOPER</option>
                    <option>ANGULAR</option>
                    <option>PYTHON DEVELOPER</option>
                </select>
            </div>
            <div className="text-start mb-3">
                <input type="tel" placeholder="Enter Contact No." className="form-control" value={number} onChange={vnumber} />
                <span  style={{color : errornumber === 'Number is Valid' ? 'green' : 'red' }}>{errornumber} </span>
                
            </div>
            <div className="text-start mb-3">
                <input type="password" placeholder="Enter Password" className="form-control" value={pass} onChange={password}/>
                <span  style={{color : errorPass === 'Valid Password' ? 'green' : 'red' }}>{errorPass} </span>
                {/* <span className="ps-2">Enter Password-{pass}</span> */}
            </div>
            
            <div className="p-4">
            <button className="btn btn-outline-success">Register</button>
            </div>

            
        </div>
        </div>
        
    )
}
export default User;