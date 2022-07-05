import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useEffect, useState } from 'react'

export const PaginationComponent=({perPage,page,setPage})=>{
const [orders,setOrders]=useState([])
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjkzNjMwMDlmMTI3ODUwZDllYjE2ZWMiLCJuYW1lIjoiaGFtemEgaGFvdWkiLCJyb2xlIjoic2VsbGVyIiwicGVybWlzc2lvbnMiOltdLCJleHAiOjE2NTkzNDY1MzkuMjQxLCJpYXQiOjE2NTQxNjI1Mzl9.b9TkN02qafmGtYmwEcpfxJrQJVvBRZuPRKe-FQCchL8"
const handleFetch=async()=>{
  const result= await fetch(
      `https://call-center-yalitech.herokuapp.com/orders`,
      {
      headers: {
            'Authorization': `Bearer ${token}`, 
        }
    })
  const parsed=await result.json()
    setOrders(parsed)
  }
  useEffect(()=>{
 handleFetch() 
  },[])
  return <>
    {orders.items&&perPage&&
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>
      <Pagination
        current={page}
        total={orders.pagination.total}
        pageSize={perPage}
        onChange={(page)=>{
          setPage(page)
          }}
        />
    </div>
  }
      </>

}
