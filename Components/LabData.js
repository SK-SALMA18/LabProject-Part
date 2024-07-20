import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { CssBaseline,Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {field: 'email', headerName: 'email', width: 200},
  { field: 'name', headerName: 'name', width: 200 },
  { field: 'gender', headerName: 'gender', width: 200 },
  { field: 'specialization', headerName: 'specialization', width: 200 },
  {field: 'experiences', headerName: 'experiences', width: 150 },
 
];

const rows = [
  { id: 1, email:"abc@gmail.com", name:"John Doe",gender:'Male', specialization:'Neurology',experiences:'5 years'},
  { id: 2, email:"xyz@gmail.com"  ,name:"Jimmy ", gender:'Male', specialization:'Dermatology',experiences:'3 years'},
];

export default function LabTable() {
    const location = useLocation()
  const [state, setLocationState] = useState({FormData})
  useEffect (()=>{
    let state = location.state
    setLocationState(state)
  }, [location.state])

  const navigate = useNavigate();
   const handleRowClick = () => {
        navigate('/laboratorist');
   }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <CssBaseline/>
      <Typography sx={{textAlign:'center',fontFamily:'fantasy',fontSize:'30px',color:'aqua',marginTop:'30px'}}>Laboratory Table Data ✍</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
        disableSelectionOnClick={true}
        onClick={handleRowClick}
      />
    </div>
  );
}

