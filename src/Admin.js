import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Admin() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [desc, setDesc] = useState()
    const [url, setUrl] = useState()
    const api="http://localhost:8080/"
    const addProduct= async ()=>{
        await axios.post(api, {name:name, price:price, desc:desc, url: url})
    }
  return (
    <div>
        <h3> Admin </h3>
      <p>
        Enter Name:
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder=''></input>
      </p>
      <p>
        Enter Price: 
        <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder=''></input>
      </p>
      <p>
        Enter Description: 
        <input type="text" onChange={(e)=>setDesc(e.target.value)} placeholder=''></input>
      </p>
      <p>
        Enter URL: 
        <input type="text" onChange={(e)=>setUrl(e.target.value)} placeholder=''></input>
      </p>
      <button onClick={addProduct}> Save </button>
    </div>
  )
}
