import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {PaginationComponent} from "./Pagination"

const BasicTable=({orders,perPage,setPerPage,page,setPage})=> {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}  aria-label="simple table">
          <TableHead style={{backgroundColor:"#F0F0F0F0"}}>
            <TableRow>
              <TableCell align="left">Tracking</TableCell>
              <TableCell >Status</TableCell>
              <TableCell align="left">Customer</TableCell>
              <TableCell align="center">Products</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders!==undefined &&orders.map((row) => (
              <TableRow
                style={{cursor:"pointer"}}
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.tracking_id}
                </TableCell>
                <TableCell ><Chip label={row?.last_status} style={{backgroundColor:"#F0E68C"}}/></TableCell>
                <TableCell align="left" style={{fontWeight:"bold"}}>{row?.client?.full_name}</TableCell>
                <TableCell align="center">{row?.products.map((item)=>item?.name+"\n")}</TableCell>
                <TableCell align="right">{row?.destination.city_name}</TableCell>
                <TableCell align="right" style={{paddingRight:"45px"}}>
                  <VisibilityIcon color="action"/>
                  <EditIcon color="action"/>
                  <DeleteIcon color="error"/>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
              <PaginationComponent perPage={perPage} setPerPage={setPerPage} page={page} setPage={setPage}/>
      </>
  );
}
export default BasicTable
