import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { CssBaseline,Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {field: 'nameofequipment', headerName: 'nameofequipment', width: 200},
  { field: 'instrumentmanufacture', headerName: 'instrumentmanufacture', width: 200 },
  { field: 'record', headerName: 'record', width: 200 },
  {field: 'analysis', headerName: 'analysis', width: 150 },
  {field: 'service', headerName: 'service', width: 150 },
 
];

const rows = [
  { id: 1,  nameofequipment:"Autoclave",instrumentmanufacture:"ABC Manufacture",record:"",analysis:"",service:""},
  { id: 2,  nameofequipment:"Incubator",instrumentmanufacture:"XYZ Manfacture",record:"",analysis:"",service:""},
  { id: 3,  nameofequipment:"Autoclave",instrumentmanufacture:"ABC Manufacture",record:"",analysis:"",service:""},
  { id: 4,  nameofequipment:"Incubator",instrumentmanufacture:"XYZ Manfacture",record:"",analysis:"",service:""},
  { id: 5,  nameofequipment:"Autoclave",instrumentmanufacture:"ABC Manufacture",record:"",analysis:"",service:""},
  { id: 6,  nameofequipment:"Incubator",instrumentmanufacture:"XYZ Manfacture",record:"",analysis:"",service:""},
 
];

export default function InstrumentTable() {
    const location = useLocation()
  const [state, setLocationState] = useState({FormData})

  //location state
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
      <Typography sx={{textAlign:'center',fontFamily:'fantasy',fontSize:'30px',color:'purple',marginTop:'30px'}}>Instrument Table Data ✍</Typography>
      <CssBaseline/>
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

