import {Grid,Button,InputAdornment,IconButton,TextField} from "@mui/material"
import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import TablePagination from '@mui/material/TablePagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

export const SearchBar=({setPerPage,perPage,searched,setSearched,setFilterType})=>{
return <Card style={{width:"100%",backgroundColor:"#F0F0F0F0",marginBottom:"15px"}}>
      <CardContent>

      <Grid container xs={12} md={12} spacing={2} style={{display:"flex",alignItems:"center"}}>
        <Grid item  style={{paddingLeft:"10px"}}>
          <Button style={{backgroundColor:"#fff",marginRight:"5px",color:"#000",textTransform:"lowercase"}} variant="contained" onClick={()=>setFilterType("tracking_id")}>
            tracking_id
          </Button>
          <Button style={{backgroundColor:"#fff",marginRight:"5px",color:"#000",textTransform:"lowercase"}} variant="contained" onClick={()=>setFilterType("phone")}>
            phone
          </Button>
          <Button style={{backgroundColor:"#fff",marginRight:"5px",color:"#000",textTransform:"lowercase"}} variant="contained" onClick={()=>setFilterType("full_name")}>
            full name
          </Button>
          <Button style={{backgroundColor:"#800000",color:"#fff",textTransform:"lowercase"}} variant="contained" 
            onClick={()=>{
            setFilterType("")
            setSearched("")
          }}>
            clear
          </Button>
        </Grid>

        <Grid item xs={8} md={8} style={{marginRight:"5px"}}>
          <TextField
            label="Search"
            style={{backgroundColor:"#fff"}}
            size="small"
            value={searched}
            fullWidth
            onChange={(e)=>setSearched(e.target.value)}
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
        </Grid>
      <Grid item >
        <Select
          size="small"
          labelId="demo-simple-select-standard-label"
          variant="standard"
          id="demo-simple-select-standard"
          value={perPage}
          onChange={(e)=>setPerPage(e.target.value)}
          label="Age"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </Grid>
      </Grid>
      </CardContent>
  </Card>
}
