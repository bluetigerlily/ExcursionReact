import Splashpage from './components/splashpage/splashpage';
import Navbar from './components/navbar/navbar';
import React from 'react';
import './components/splashpage/splashpage.scss';
import { ThemeProvider } from '@mui/material/styles';
import { dark } from './components/themes/dark';
import Home from './components/Home/Home';
import Booking from './components/booking/Booking';
import { Route, Routes } from "react-router";
import Pricing from "./components/pricing/Pricing";
import Products from "./components/products/Products";
import Login from "./components/login/Login";


class App extends React.Component {

 state = {
   isClicked: false,
 }

 handleCallback = (isClicked) =>{
  this.setState({isClicked: true})
}



//does the splashpage and main website switch

render() {
  switch (this.state.isClicked) {
    case true:
      return (
        <div className="App">
            <ThemeProvider theme={dark}>
             <Navbar position="static" color="primary" enableColorOnDark >
              </Navbar>     
              <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/Products" element={<Products />} />
                 <Route path="/Pricing" element={<Pricing />} />
                 <Route path="/Booking" element={<Booking />} />
                 <Route path="/Login" element={<Login />} />

             </Routes>   
           
          </ThemeProvider>
        </div>
      );
    default:
      return (
      <div className="App">
        <Splashpage parentCallback = {this.handleCallback} />   
      </div>
      );

    }
  };
}

export default App;
