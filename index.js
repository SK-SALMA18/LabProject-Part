import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './App';
import Box from '@mui/material/Box';
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

const theme = createTheme(({
    palette:{
        primary:{
            main:'#14A800'
        },
        secondary:{
            main:'#1D4354'
        }
    }
}))
// const theme = createTheme({
//     breakpoints: {
//       values: {
//         mobile: 0,
//         tablet: 640,
//         laptop: 1024,
//         desktop: 1280,
//       },
//     },
//   });

const AppLayout=()=>{
    return(
        <div>
            <ThemeProvider theme={theme}>
            {/* <Box
        sx={{
          width: {
            mobile: 100,
            laptop: 300,
          },
        }}
      >
        <CssBaseline/>
        <App/>
      </Box> */}
               <CssBaseline/>
               <App/>
            </ThemeProvider>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);