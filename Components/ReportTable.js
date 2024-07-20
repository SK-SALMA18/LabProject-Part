import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {field: 'PatientName', headerName: 'PatientName', width: 200},
  {field: 'TestName', headerName: 'TestName', width: 200},
  { field: 'TestResult', headerName: 'TestResult', width: 200 },
];

const rows = [
  { id: 1, PatientName:'raju',TestName:'Diabietics',TestResult:'Negative'},
  { id: 2, PatientName:'ravi',TestName:'BloodPressure',TestResult:'Postive'},
];

export default function DataTable() {
    const location = useLocation()
  const [state, setLocationState] = useState({FormData})
  useEffect (()=>{
    let state = location.state
    setLocationState(state)
  }, [location.state])

  const navigate = useNavigate();
   const handleRowClick = () => {
        navigate('/report');
   }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography sx={{textAlign:'center',fontFamily:'fantasy',fontSize:'30px',color:'chartreuse',marginTop:'30px'}}>Report Table ✍</Typography>
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

