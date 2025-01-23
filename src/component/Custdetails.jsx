import { useState } from "react";

const Custdetails = () => {
    const [custname,setCustname] = useState('')
    const [productname,setProductname] = useState('')
    const [price,setPrice] = useState('')
    const [editId,setEditId] = useState(null)
    const [todo,setTodo] = useState([])

    const custName =(event)=>{
        const cust_name = event.target.value
        setCustname (cust_name)
    }
    const productName =(event)=>{
        const prod_name = event.target.value
        setProductname(prod_name)
    }
    const priceproduct =(event)=>{
        const prod_price = event.target.value
        setPrice(prod_price)
    }
    
    const datehandler =()=>{
        if(custname.trim() && productname.trim() && price.trim()){
            const today = new Date()
            const currentDate = today.toLocaleDateString();
            const currentTime = today.toLocaleTimeString();

            const date_time =`${currentDate} ${currentTime}`;

            if(editId){
                setTodo((prevData)=>
                    prevData.map((item)=>{
                        return item.id === editId ?{...item,custname,productname,price,date:date_time} : item
                    })
            )
            setEditId(null)
        }else{
            setTodo([...todo,{id: Date.now(),custname,productname,price,date:date_time}])
        }
            
            setCustname('')
            setProductname('')
            setPrice('')
        }else{
            alert('All Fields are Required')
        }

    }
    const edit =(item)=>{
        setCustname (item.custname)
        setProductname(item.productname)
        setPrice(item.price)
        setEditId(item.id)
    }
    const deleteCust =(index)=>{
        const updateTodo =[...todo]
        updateTodo.splice(index,1)
        setTodo(updateTodo)

    }
    const printDetails =(customer) =>{
        const printData = window.open("","","width:700 height:500")
        printData.document.write(`<html><head><title>Customer Details</title></head>`)
        printData.document.write(`<body>
                <h1>Customer Details</h1>
                <h2>Receipt No :${customer.id}</h2>
                <h2>Name :${customer.custname}</h2>
                <h2>product Name :${customer.productname}</h2>
                <h2>Price :${customer.price}</h2>
                <h2>Date&Time :${customer.date}</h2>
            </body></html>`)
            printData.print();
            printData.close();
    }

    return (
        <div>
            <h2>Customer Details</h2>
            <div className="w-50 bg-dark p-4 mx-auto rounded-3">
                <div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Your Name"
                        value={custname}
                        onChange={custName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Your Product"
                        value={productname}
                        onChange={productName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Product Price"
                        value={price}
                        onChange={priceproduct}
                    />
                </div>
                <button className="btn btn-success w-100" onClick={datehandler}>
                    {editId ? 'update' : 'Add Data'}
                </button>
            </div>
            <div id="printSection" className="w-100 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Receipt No</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.custname}</td>
                                        <td>{item.productname}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                        <td>
                                            <button className="btn btn-primary "onClick={()=>printDetails(item)}>
                                                Print
                                            </button>
                                            <button className="btn btn-success" onClick={()=>edit(item)}>EDIT</button>
                                            <button className="btn btn-danger" onClick={()=>deleteCust(index)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Custdetails;


