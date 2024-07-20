// FORM FOR INSTRUMENTEQUIPMET......
// -----------------------------------------------------

// import React from 'react';
// import { Link } from 'react-router-dom';
// import {TextField,Button} from '@mui/material';
// import {useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const  names= [
//     'Autoclave',
//     'Hematology analyzers',
//     'Centrifuge',
//     'Blood gas analyzers',
//     'Incubator',
//     'Mass Spectrometers',
//     'monitors and x-ray equipment'
//   ];
//   function getStyles(name, equipmentName, theme) {
//     return {
//       fontWeight:
//         equipmentName.indexOf(name) === -1
//           ? theme.typography.fontWeightRegular
//           : theme.typography.fontWeightMedium,
//     };
//   }  
// const InstrumentEquipment = () => {
//  const [formData, setFormData] = useState({
//     nameofequipment:'',
//     instrumentmanufacture:'',
//     record:'',
//     analysis:'',
//     service:'',
//  })
// const handleChange =(event) => {
//     setFormData({...formData, [event.target.name]: event.target.value});
// }
// const theme = useTheme();
// const [equipmentName, setEquipmentName] = useState([]);

// const handleChanged = (event) => {
//   const {
//     target: { value },
//   } = event;
//   setEquipmentName(
//     typeof value === 'string' ? value.split(',') : value,
//   );
// };
// function submitted(){
//     alert('Form is Submitted!....');
// }
//  const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }
// return (
//     <div className='form container' style={{backgroundColor:'navajowhite' ,height:'100vh',width:'100%'}}>
//         <center><typography style={{backgroundColor:'orange',color:'white',fontWeight:'500',fontSize:'35px'}}>Instrument Equipment 💉</typography></center><br/>
//         <center>
//         <form onSubmit={handleSubmit}>
//                 <FormControl sx={{ m: 1, width: 300 }} >
//                 <InputLabel id="demo-multiple-name-label">Name of Equiment</InputLabel>
//                 <Select
//                 labelId="demo-multiple-name-label"
//                 id="demo-multiple-name"
//                 multiple
//                 value={equipmentName}
//                 onChange={handleChanged}
//                 input={<OutlinedInput label="Name of Equiment" />}
//                 MenuProps={MenuProps}
//                 >
//                 {names.map((name) => (
//                     <MenuItem
//                     key={name}
//                     value={name}
//                     style={getStyles(name, equipmentName, theme)}
//                     >
//                     {name}
//                     </MenuItem>
//                 ))}
//                 </Select>
//             </FormControl>
//             <FormControl >
//                     <InputLabel></InputLabel>
//                     <TextField 
//                     input={<OutlinedInput label="Instrument Manufacturer"/>}
//                     label='Instrument Manufacturer'
//                     sx={
//                         {
//                             height:'100px',
//                             width:'300px',
//                         }
//                     }
//                     onChange={handleChange}
//                     ></TextField>
//             </FormControl><br/>
//             <FormControl >
//                     <InputLabel></InputLabel>
//                     <TextField 
//                 input={<OutlinedInput label="Record of Maintenance" />}
//                 label='Record of Maintenance'
//                     sx={
//                         {
//                             height:'100px',
//                             width:'300px',
//                             marginRight:'15px !important',
//                         }
//                     }
//                     onChange={handleChange}
//                     ></TextField>
//             </FormControl>
//             <FormControl >
//                     <InputLabel></InputLabel>
//                     <TextField 
//                     input={<OutlinedInput label="Analysis" />}
//                     label='Analysis'
//                     sx={
//                         {
//                             height:'100px',
//                             width:'300px',
//                         }
//                     }
//                     onChange={handleChange}
//                     ></TextField>
//             </FormControl><br/>
//             <FormControl >
//                     <InputLabel></InputLabel>
//                     <TextField 
//                     input={<OutlinedInput label="Services" />}
//                     label='Services'
//                     sx={
//                         {
//                             height:'100px',
//                             width:'300px',
//                             marginRight:'15px !important',
//                         }
//                     }
//                     onChange={handleChange}
//                     ></TextField>
//             </FormControl>
//             <FormControl >
//                     <InputLabel></InputLabel>
//                     <TextField 
//                     input={<OutlinedInput label="Review" />}
//                     label='Review'
//                     sx={
//                         {
//                             height:'100px',
//                             width:'300px',
//                         }
//                     }
//                     onChange={handleChange}
//                     ></TextField>
//             </FormControl><br/>
//             {/* <Button variant="outlined" onClick={submitted} style={{color:'white' ,backgroundColor:'blue'}}>Submit</Button> */}
//             <div className='button' style={{marginRight:'450px'}}><Link to='/instrumenttable' className='link' state={formData}>Submit </Link></div>
//         </form>
//       </center>
//     </div>
// )
// }
// export default InstrumentEquipment;

// Code For Cards to InstrumentEquipments.....

import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CssBaseline } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function InstrumentEquipment() {
  return (
    <div>
      <CssBaseline/>
      <Typography sx={{textAlign:'center',fontFamily:'fantasy',fontSize:'30px',color:'red',marginTop:'30px'}}>Instrument Equipment Laboratory List 💉</Typography>
      <Grid container spacing={0}>
        <Grid >
        <Card sx={{ maxWidth: 345 ,marginTop:'50px' ,marginRight:'50px',marginLeft:'30px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://media-cms.virohan.com/staging/medical_equipment_61dcd9d58f.jpg"
          alt="instrument"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Microscope
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A microscope is an instrument that is used to magnify small objects.
            Some microscopes can even be used to observe an object at the cellular level, 
            allowing scientists to see the shape of a cell, its nucleus, mitochondria, and other organelles.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained" sx={{backgroundColor:'GrayText',color:'aqua'}} href="/instrumenttable">Share</Button>
        <Button size="small" variant="outlined" href="/inventory">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px',marginRight:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://content.jdmagicbox.com/quickquotes/images_main/medical-lab-instruments-379698492-2icul.jpg"
          alt="Instrument"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Medical Lab Equipment
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Medical Lab Equipment we deal in can pass through several rigorous standards. 
              These medical laboratory equipment can be used in ICU. Offered healthcare solutions are needed to promote patients health. 
              Offered equipment are diagnosing and preventing the disease
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained"  sx={{backgroundColor:'GrayText',color:'aqua'}} href="/instrumenttable">Share</Button>
        <Button size="small" variant="outlined" href="/inventory">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2017/10/clinitek_novus_960x720-00090495~10.jpg"
          alt="instrument"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Urine Analyser
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A urine analyser is a device used in the clinical setting to perform automatic urine testing.
            The units can detect and quantify a number of analytes including bilirubin, protein, glucose and red blood cells.
            a type of reflectance photometer that can process several hundred strips per hour.
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained"  sx={{backgroundColor:'GrayText',color:'aqua'}} href="/instrumenttable">Share</Button>
        <Button size="small"  variant="outlined" href="/inventory">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px',marginRight:'50px',marginLeft:'30px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.indosurgicals.com/images/categories/instrument-kit.jpg"
          alt="kit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Surgical Instrument
          </Typography>
          <Typography variant="body2" color="text.secondary">
            IndoSurgicals is the most trusted manufacturer, dealer, 
            and exporter of ready-made surgical instrument kits for specific surgical procedures. 
            Classification of surgical instruments helps surgeons to understand the functions
            Two waves in history contributed significantly to the development of surgical tools.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained"  sx={{backgroundColor:'GrayText',color:'aqua'}} href="/instrumenttable">Share</Button>
        <Button size="small" variant="outlined" href="/inventory">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px',marginRight:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://t4.ftcdn.net/jpg/01/89/57/79/240_F_189577923_ANoSMIVLctEun9cy9WUafBnJ2YJvds9e.jpg"
          alt="kit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Reading Patient Heart Monitor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Patient Monitors can be slightly intimidating
            With all of the multi-colored numbers and wavy lines, things can get a bit confusing.
            So,our"how to read a patient monitor"article will help,covering most of the basic standard parameters of a patient monitor.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained"  sx={{backgroundColor:'GrayText',color:'aqua'}}  href="/instrumenttable">Share</Button>
        <Button size="small" variant="outlined" href="/inventory">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://th.bing.com/th/id/OSK.HERORVTCEhQRotyewR5xeZj-oDxXOMpKE3dUF5wZ9Ya8EeQ?rs=1&pid=ImgDetMain"
          alt="kit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                 Autoclave Machine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Autoclaves operate at high temperature and pressure in order to kill microorganisms and spores. 
            They are used to decontaminate certain biological waste and sterilize media, instruments and lab ware.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained"  sx={{backgroundColor:'GrayText',color:'aqua'}}  href="/instrumenttable">Share</Button>
        <Button size="small" variant="outlined" href="/inventory">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default InstrumentEquipment;
