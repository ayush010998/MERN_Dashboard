import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';

const Product = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts=async()=>{
        let result= await fetch("http://localhost:5000/products");
        result=await result.json();
        setProducts(result);

    }

    const deleteProduct= async()=>{
      let result=await fetch(`http://localhost:5000/product`,{
        method:"Delete",

      })
      result=await result.json()
      if(result){
        alert('record is deleted')
      }

    };
  return (
    <div className='product-list'> 
      <h1>Product List</h1>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {
        products.map((item,index)=>{

            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li><button onClick={deleteProduct(item._id)}>Delete</button></li>
            <Link to={'/update/'+item._id}>Update</Link>
          </ul>

        })
      }
    </div>
  )
}

export default Product
