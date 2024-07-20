import React from 'react';
import '../Form.css';
import {Link} from 'react-router-dom';
import {TextField,Button, CssBaseline, Typography} from '@mui/material';
import {useState } from 'react';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const LabTable = () => {
 const [formData, setFormData] = useState({
    email: '',
    name: '',
    gender:'',
    specialization: '',
    experiences: '',
 })
 const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleAddLaboratorist = () => {
  console.log('Adding new laboratorist:', formData);
  rows.push({ ...formData, id: rows.length + 1 });
  setFormData({ email: '', name: '', specialization: '', experiences: '' });
};
  return (
    <div className='form-container' style={{backgroundColor:'whitesmoke',height:'83vh',width:'100%'}}>
      <CssBaseline/>
      <Typography sx={{fontSize:'30px',color:'darkgreen',fontFamily:'fantasy',marginTop:'30px'}}>Laboratorist Data 👤</Typography>
      <fieldset>
        <form>
            <div>
            <TextField className='textfield'
                    margin='normal'
                    fullWidth
                    label='Email'
                    name='email'
                    type='email'
                    value={formData.email}
                    placeholder='email'
                    onChange={handleChange}
                /><br/><br/>
                <TextField  className='textfield'
                    margin='normal'
                    fullWidth
                    label="Name"
                    name='name'
                    type='text'
                    value={formData.name}
                    placeholder='name'
                    onChange={handleChange}
                /><br/><br/>
                <Select
                    placeholder="Gender"
                    label="Gender"
                    name='gender'
                    sx={{
                      width: 1200,
                      height: 55,
                      border:'1px solid black'
                      
                    }}
                >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
            </Select>     
            <TextField className='textfield'
                    margin='normal'
                    fullWidth
                    label="Specialization"
                    name='specialization'
                    type='text'
                    value={formData.specialization}
                    placeholder='specalization'
                    onChange={handleChange}
                /><br/><br/>
                <TextField className='textfield'
                    margin='normal'
                    fullWidth
                    label="Experiences"
                    name='experiences'
                    type='number'
                    value={formData.experiences}
                    placeholder='experiences'
                    onChange={handleChange}
                /><br/>
                <div className='button'><Link to='/laboratorist' className='link' state={formData} onClick={handleAddLaboratorist}>ADD +</Link></div>
            </div>
        </form>
      </fieldset>
    </div>
  ) 
}

export default LabTable;