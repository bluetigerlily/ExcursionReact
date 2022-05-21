import Mainpage from './components/mainpage/mainpage';
import Splashpage from './components/splashpage/splashpage';
import Navbar from './components/navbar/navbar';
import React, { useState } from 'react';
import './components/splashpage/splashpage.scss';


function App() {


const [isClicked, setClicked] = useState(false);
//does the splashpage and main website switch
  switch (isClicked) {
    case true:
      return (
        <div className="App">
         <Navbar />
         <Mainpage />
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
