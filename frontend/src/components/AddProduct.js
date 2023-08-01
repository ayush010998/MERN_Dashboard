import {React,useState} from 'react'

const AddProduct = () => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const [error,setError]=useState(false)

    const addProduct=async()=>{
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.log(result)


    }

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type='text' placeholder='enter product name' className='input-box'
      onChange={(e)=>setName(e.target.value)}></input>
     {error && !name && <span className='invalid-input'>Enter Valid name</span> } 
      <input type='text' placeholder='enter price' className='input-box'
      onChange={(e)=>setPrice(e.target.value)}></input>
       {error && !price && <span className='invalid-input'>Enter Valid price</span> } 
      <input type='text' placeholder='enter category' className='input-box'
      onChange={(e)=>setCategory(e.target.value)}></input>
       {error && !category && <span className='invalid-input'>Enter Valid category</span> } 
      <input type='text' placeholder='enter company' className='input-box'
      onChange={(e)=>setCompany(e.target.value)}></input>
       {error && !company && <span className='invalid-input'>Enter Valid company</span> } 
      <button onClick={addProduct} className='btn'>Add Product</button>
      
    </div>
  )
}

export default AddProduct
