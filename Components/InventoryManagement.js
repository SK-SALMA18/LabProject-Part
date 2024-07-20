import  * as React from 'react';
import {Box,Button, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import{
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import{
    randomCreatedDate,
    randomId,
    randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Lab instruments Ltd','XYZ Laboratory Supplies','ABC Laborartory Supplies','CC Laboratory','SS Laboratory'];
const randomRole=()=>{
    return randomArrayItem(roles);
};
const name = ['Sodium Chloride','Microscope','Erlenmeyer Flask','Pipette set',];
const randomName=()=>{
    return randomArrayItem(name);
};
const initialRows=[
    {
        id:randomId(),
        name:randomName(),
        description:'Lab-grade salt for experiments',
        quantity:10,
        manufacturer:'ABC chemicals',
        exprieDate:randomCreatedDate(),
        role:randomRole(),
    },
    {
        id:randomId(),
        name:randomName(),
        description:'Binocular compound microscope',
        quantity:2,
        manufacturer:'XYZ Optics',
        exprieDate:randomCreatedDate(),
        role:randomRole(),
    },
    {
        id:randomId(),
        name:randomName(),
        description:'Glass flask with conical shape ',
        quantity:20,
        manufacturer:'Labware Corportion',
        exprieDate:randomCreatedDate(),
        role:randomRole(),
    },
    
    {
        id:randomId(),
        name:randomName(),
        description:'Digital pH meter for testing',
        quantity:1,
        manufacturer:'pH Solution Inc.',
        exprieDate:randomCreatedDate(),
        role:randomRole(),
    },
    {
        id:randomId(),
        name:randomName(),
        description:'Set of variable volume pipettes',
        quantity:5,
        manufacturer:'Precision Pipettes',
        exprieDate:randomCreatedDate(),
        role:randomRole(),
    },
];
function EditToolbar(props) {
    const {setRows,setRowModesModel} = props;

const handleClick=()=>{
    const id = randomId();
    setRows((oldRows)=>[...oldRows,{id,itemname:'',description:'',quantity:'', manufacturer:'',isNew:true}]);
    setRowModesModel((oldModel)=>({
        ...oldModel,
        [id] : {mode:GridRowModes.Edit , fieldToFocus:'itemname'},
    }));
};

return(
    <GridToolbarContainer>
        <Button color='warning' startIcon={<AddIcon/>} onClick={handleClick} style={{marginLeft:'1000px',width: '200px',height: '30px',backgroundColor:'green',color:'white'}}>
            Add 
        </Button>
    </GridToolbarContainer>
);
}

export default function FullFeaturedCrudGrid(){
    const[rows,setRows] = React.useState(initialRows);
    const[rowModesModel,setRowModesModel]=React.useState({});

  const handleRowEditStop = (params,event)=>{
    if(params.reason === GridRowEditStopReasons.rowFocusOut){
        event.defaultMuiPrevented = true;
    }
  };
  const handleEditClick = (id)=>()=>{
    setRowModesModel({...rowModesModel,[id]: {mode:GridRowModes.Edit}});
  };
  const handleSaveClick = (id)=>()=>{
    setRowModesModel({...rowModesModel,[id]: {mode:GridRowModes.View}});
  };
  const handleDeleteClick = (id)=>()=>{
    setRows(rows.filter((row)=>row.id !== id));
  };
  const handleCancelClick=(id)=>()=>{
    setRowModesModel({
        ...rowModesModel,
        [id]: {mode:GridRowModes.View,ignoreModification:true},
    });
  const editedRow = rows.find((row)=> row.id === id);
  if (editedRow.isNew){
    setRows(rows.filter((row)=> row.id !== id));
  }
  };
  const processRowUpdate = (newRow)=>{
    const updateRow = {...newRow,isNew:false};
    setRows(rows.map((row=>(row.id === newRow.id ? updateRow:row))));
    return updateRow;
  };
  const handleRowModesModelChange = (newRowModesModel)=>{
    setRowModesModel(newRowModesModel);
  };
  const columns =[
    {
        field : 'name',
        headerName:'ITEM NAME',
        label:'Item Name',
        type:'text',
        width:200,
        editable:true,
        type:'singleSelect',
        valueOptions:['Sodium Chloride','Microscope','Erlenmeyer Flask','Pipette set',]
    },
    {
        field:'description',
        headerName:'DESCRIPTION',
        label:'description',
        type:'text',
        width:300,
        align:'left',
        headerAlign:'left',
        editable:true,
    },
    {
        field:'quantity',
        headerName:'QUANTITY',
        label:'Quantity',
        type:'number',
        width:80,
        align:'left',
        headerAlign:'left',
        editable:true,
    },
    {
        field:'manufacturer',
        headerName:'MANUFACTURER',
        label:'Manufacturer',
        type:'text',
        width:220,
        align:'left',
        headerAlign:'left',
        editable:true,
    },
    {
        field:'exprieDate',
        headerName:'EXPIRE DATE',
        label:'Expire Date',
        type:'date',
        width:100,
        editable:true,
    },
    {
        field:'role',
        headerName:'SUPPLIER',
        label:'Supplier',
        width:220,
        editable:true,
        type:'singleSelect',
        valueOptions:['Lab instruments Ltd','XYZ Laboratory Supplies','ABC Laborartory Supplies','CC Laboratory','SS Laboratory']
    },
    {
        field:'actions',
        type:'actions',
        headerName:'Actions',
        width:100,
        cellClassName:'actions',
        getActions:({id})=>{
            const isInEditMode =  rowModesModel[id]?.mode === GridRowModes.Edit;
            if(isInEditMode){
               return[
                        <GridActionsCellItem
                        icon={<SaveIcon/>}
                        label="Save"
                        sx={{
                            color:'primary.main',
                        }}
                        onClick={handleSaveClick(id)}
                    />,
                    <GridActionsCellItem
                    icon={<CancelIcon/>}
                    label="Cancel"
                    className='textPrimary'
                    onClick={handleCancelClick(id)}
                    color='inherit'
                />,
               ];
            }
            return [
                <GridActionsCellItem
                    icon={<EditIcon/>}
                    label="Edit"
                    className='textPrimary'
                    onClick={handleEditClick(id)}
                    color='inherit'
                />,
                <GridActionsCellItem
                    icon={<DeleteIcon/>}
                    label="Delete"
                    className='textPrimary'
                    onClick={handleDeleteClick(id)}
                    color='inherit'
                />,
            ];
        },
    },
  ];
  return(
    <Box
        sx={{
            height:500,
            width:"100%",
            '& .actions':{
                color:'text.secondary',
            },
            '&.textPrimary':{
                color:'text.primary',
            },
        }}
        >
            <Typography sx={{textAlign:'center',fontFamily:'fantasy',fontSize:'30px',color:'deeppink',marginTop:'30px'}}>Inventory Management 📝</Typography>
         <DataGrid
            rows={rows}
            columns={columns}
            editMode='row'
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slots={{
                toolbar:EditToolbar,
            }}
            slotProps={{
                toolbar:{setRows,setRowModesModel},
            }}
            style={{backgroundColor:'whitesmoke',height:'100vh',width:'100%'}}
         />
    </Box>
  );
}