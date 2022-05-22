import Splashpage from './components/splashpage/splashpage';
import Navbar from './components/navbar/navbar';
import React, { useState } from 'react';
import './components/splashpage/splashpage.scss';
import { ThemeProvider } from '@mui/material/styles';
import { dark } from './components/themes/dark';
import Products from './components/products/Products';
import Booking from './components/booking/Booking';


function App() {


const [isClicked, setClicked] = useState(false);
//does the splashpage and main website switch
  switch (isClicked) {
    case true:
      return (
        <div className="App">
          <ThemeProvider theme={dark}>
            <Navbar position="static" color="primary" enableColorOnDark >
            </Navbar>        
            <Products />
            <Booking />
          </ThemeProvider>
        </div>
      );
    default:
      return (
        <div className="App">
         <Splashpage />
           <div className='btncontainer'>
              <button className='splashpagebtn' type='button' onClick={() => setClicked(true)}>
         Begin Your Safari</button>
           </div>
        </div>
      );

    }
  };
 

export default App;
