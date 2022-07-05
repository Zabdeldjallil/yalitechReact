import { Grid } from "@mui/material"
import {BasicCard} from "./Card"
import {SearchBar} from "./SearchBar"
import { useEffect, useState } from 'react'

export default function Header({setStatus,setPerPage,perPage,status,setSearched,setFilterType,searched}) {
  const [stats,setStats]=useState()
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjkzNjMwMDlmMTI3ODUwZDllYjE2ZWMiLCJuYW1lIjoiaGFtemEgaGFvdWkiLCJyb2xlIjoic2VsbGVyIiwicGVybWlzc2lvbnMiOltdLCJleHAiOjE2NTkzNDY1MzkuMjQxLCJpYXQiOjE2NTQxNjI1Mzl9.b9TkN02qafmGtYmwEcpfxJrQJVvBRZuPRKe-FQCchL8"
const handleFetch=async()=>{
  const result= await fetch(
      `https://call-center-yalitech.herokuapp.com/orders/stats`,
      {
      headers: {
            'Authorization': `Bearer ${token}`, 
        }
    })
  const parsed=await result.json()
    setStats(parsed)
  }
  useEffect(()=>{
 handleFetch() 
  },[])
  return (
  <div>
    {stats!==undefined&&<>
      <b style={{fontSize:"20px"}}>Call center</b>
        <Grid container xs={12} md={12} spacing={2}>
          <Grid item >
            <BasicCard text="Pending" numerical={stats[0].pending} onClick={()=>status==="pending" ?setStatus(undefined) : setStatus("pending")}/>
          </Grid>
          <Grid item >
            <BasicCard text="Confirmed" numerical={stats[0].confirmed} onClick={()=> status==="confirmed" ?setStatus(undefined) : setStatus("confirmed")}/>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12}>
          <SearchBar setPerPage={setPerPage} perPage={perPage} searched={searched} setSearched={setSearched} setFilterType={setFilterType}/>
        </Grid>
        </>
    }
    </div>
  );
}
