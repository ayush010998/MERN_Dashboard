import {React,useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'


const UpdateProduct = () => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const [error,setError]=useState(false)

    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
      getProductDetails()
    },[])

    const getProductDetails=async()=>{
      let result=await fetch(`http://localhost:5000/product/${params.id}`);
      result=await result.json()
      setName(result.name)
      setPrice(result.price)
      setCategory(result.company)
      setCompany(result.company)

    }
    const updateProduct=async()=>{
      let result= await fetch(`http://localhost:5000/product/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
          "Content-Type":"application/json"
        }

      })
      result=await result.json()
      console.warn(result)
      navigate('/')




    }

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type='text' placeholder='enter product name' className='input-box'
      onChange={(e)=>setName(e.target.value)}></input>
     
      <input type='text' placeholder='enter price' className='input-box'
      onChange={(e)=>setPrice(e.target.value)}></input>
       
      <input type='text' placeholder='enter category' className='input-box'
      onChange={(e)=>setCategory(e.target.value)}></input>
      

      <input type='text' placeholder='enter company' className='input-box'
      onChange={(e)=>setCompany(e.target.value)}></input>
     
      <button onClick={updateProduct} className='btn'>Update Product</button>
      
    </div>
  )
}


export default UpdateProduct
