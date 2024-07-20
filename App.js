import React from "react";
import Header from "./Components/Header";
import SideBar from './Components/SideBar';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import LabTable from "./Components/LabTable";
import LabData from "./Components/LabData";
import ReportData from "./Components/ReportData";
import ReportTable from "./Components/ReportTable";
import InventoryManagement from './Components/InventoryManagement';
import InstrumentEquipment from "./Components/InstrumentEquipment ";
import InstrumentTable from "./Components/InstrumentTable";


function App(){
    return(
        <Router>
            {/* <Header/> <br/> */}
            {/* <SideBar/> */}
            <Navbar/>
            
    <Routes>
        {/* <Route exact path="/laboratorists" element={<SideBar/>}/> */}
        <Route exact path ='/laboratorist' element={<LabData />} />
        <Route exact path ='/labTable' element={<LabTable />} />
        <Route exact path ='/report' element={<ReportData />} />
        <Route exact path ='/reporttable' element={<ReportTable />} />
        <Route exact path ='/inventory' element={<InventoryManagement/>} />
        <Route exact path='/instrument' element={<InstrumentEquipment/>}/>
        <Route exact path='/instrumenttable' element={<InstrumentTable/>}/>
    </Routes>  
</Router>
    )
}
export default App;