import React from 'react';
import '../report.css';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import  Typography from '@mui/material/Typography';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ReportData = () => {
 const [formData, setFormData] = useState({
    email: '',
    PaticentId:'',
    PaticentName: '',
    
 })
const handleChange =(event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
}
  return (
    <div className='data'>
      <Typography sx={{fontSize:'30px',color:'gold',fontFamily:'fantasy',textAlign:'center',marginTop:'30px'}}>Paticent Data 👤</Typography>
      <fieldset>
        <form>
            <div style={{textAlign:"center"}}>
            <Stack direction="row" alignItems="center" spacing={2} marginLeft={'450px'} marginBottom={'10px'}>
              <Button component="label" variant="contained" sx={{backgroundColor:'white',color:'black'}} startIcon={<CloudUploadIcon />}>
                          Upload Paticent Report Here...
              <VisuallyHiddenInput type="file" />
            </Button>
                </Stack>
            <TextField className='textfields'
                    margin='normal'
                    name='email'
                    type='email'
                    placeholder='email'
                    onChange={handleChange}
               /><br/>
                <TextField className='textfields'
                    margin='normal'
                    name='PaticentId'
                    type='number'
                    placeholder='PaticentId'
                    onChange={handleChange}
               /><br/>
                <TextField className='textfields'
                    margin='normal'
                    name='PaticentName'
                    type='text'
                    placeholder='PaticentNme'
                    onChange={handleChange}
               /><br/>
               <div className='Button'><Link to='/reporttable' className='link' state={formData}>SUBMIT REPORT</Link></div>
            </div>
        </form>
      </fieldset>
    </div>
  ) 
}

export default ReportData;