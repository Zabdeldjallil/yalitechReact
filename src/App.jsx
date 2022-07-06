import { useEffect, useState } from 'react'
import  BasicTable from "./components/Table" 
import Header from './components/Header'

function App() {
  const [orders,setOrders]=useState([])
  const [status,setStatus]=useState()
  const [perPage,setPerPage]=useState(5)
  const [page,setPage]=useState(1)
  const [searched,setSearched]=useState("")
  const [filterType,setFilterType]=useState("")
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjkzNjMwMDlmMTI3ODUwZDllYjE2ZWMiLCJuYW1lIjoiaGFtemEgaGFvdWkiLCJyb2xlIjoic2VsbGVyIiwicGVybWlzc2lvbnMiOltdLCJleHAiOjE2NTkzNDY1MzkuMjQxLCJpYXQiOjE2NTQxNjI1Mzl9.b9TkN02qafmGtYmwEcpfxJrQJVvBRZuPRKe-FQCchL8"



const handleFetch=async()=>{
  const result= await fetch(
    `https://call-center-yalitech.herokuapp.com/orders?count=${perPage ? perPage :5 }&page=${page ? page :""}&last_status=${status ? status:""}`, 
      {
      headers: {
            'Authorization': `Bearer ${token}`, 
        }
    })
  const parsed=await result.json()
    setOrders(parsed)
  }
let ordersToShow
  useEffect(()=>{
 handleFetch() 
  },[status,perPage,page])
if(searched!==""){
    if(filterType==="full_name"){
    ordersToShow=orders?.items.filter((item)=>item.client.full_name.includes(searched))
    }else{
      if(filterType==="phone"){
    ordersToShow=orders?.items.filter((item)=>item.client.phones.includes(searched))
      }else{
      if(filterType==="tracking_id"){
    ordersToShow=orders?.items.filter((item)=>item.tracking_id.includes(searched))
      }
  }
  }
}
  return (
  <div style={{padding:"0 15px"}}>
<Header setPerPage={setPerPage} perPage={perPage} setStatus={setStatus} status={status} searched={searched} setSearched={setSearched} setFilterType={setFilterType}/>
<BasicTable perPage={perPage} setPerPage={setPerPage} orders={ordersToShow||orders?.items} page={page} setPage={setPage}/>
      </div>
  )
}

export default App
