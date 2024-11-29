import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Content() {
  const [products, setProducts]=useState([])
  const url="http://localhost:8080/"

  const getData= async()=>{
    const response=await axios.get(url)
    setProducts(response.data)
  }
    const deleteProduct= async (id)=>{
      await axios.delete(url+id)
      getData()
    }
    useEffect(()=>{
    getData()
  },[])
  // const products=[
  //   {name:"Product 1", price:20, url:"https://picsum.photos/id/9/200/200"},
  //   {name:"Product 2", price:30,url:"https://picsum.photos/id/4/200/200"},
  //   {name:"Product 3", price:40, url:"https://picsum.photos/id/5/200/200"}
  // ]
  return (
    <div style={{display: 'flex', justifyContent:'center', flexWrap:'wrap'}}>
      {products.map((value,index)=>(
        <div style={{backgroundColor:'pink', margin: '10px', padding: '10px'}}>
          <img src={value.url}></img>
          <h3 key={index}>{value.name}</h3>
          <h4>${value.price}</h4>
          <button> Add to cart </button>
          <button onClick={()=>deleteProduct(value._id)}> Delete </button>
        </div>
      ))}
    </div>
  )
}