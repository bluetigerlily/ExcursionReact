import Splashpage from './components/splashpage/splashpage';
import Navbar from './components/navbar/navbar';
import React from 'react';
import './components/splashpage/splashpage.scss';
import { ThemeProvider } from '@mui/material/styles';
import { dark } from './components/themes/dark';
import Products from './components/products/Products';
import Booking from './components/booking/Booking';




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
            <Products />
            <Booking />
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
