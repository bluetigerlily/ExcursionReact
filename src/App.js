import Splashpage from './components/splashpage/splashpage';
import Navbar from './components/navbar/navbar';
import React from 'react';
import './components/splashpage/splashpage.scss';
import { ThemeProvider } from '@mui/material/styles';
import { dark } from './components/themes/dark';
import { Route, Routes } from "react-router";

//components
import Pricing from "./components/pricing/Pricing";
import Products from "./components/products/Products";
import Login from "./components/login/Login";
import Home from './components/Home/Home';
import Booking from './components/booking/Booking';

class App extends React.Component {

    constructor() {
      super();
      this.state ={
        isClicked: false,
      }  
    }


 handleCallback = (isClicked) =>{
  this.setState({isClicked: true})
}



//does the splashpage and main website switch

render() {
  
      return (
        <div className="App">
            <ThemeProvider theme={dark}>
             <Navbar position="static" color="primary" enableColorOnDark >
              </Navbar> 
                 
              <Routes>
                 
                {(this.state.isClicked===true) ? 
                (<Route path="/" element={<Home />} />) : 
                (<Route path="/" element={<Splashpage parentCallback={this.handleCallback} />}  />) 
                }
                 <Route path="/Home" element={<Home />} />
                 <Route path="/Products" element={<Products />} />
                 <Route path="/Pricing" element={<Pricing />} />
                 <Route path="/Booking" element={<Booking />} />
                 <Route path="/Login" element={<Login />} />
             </Routes>   
            
          </ThemeProvider>
        </div>
      );

    
  };
}

export default App;
