import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { IdentityContextProvider } from "react-netlify-identity-widget"


const url = "https://jocular-madeleine-0bc72c.netlify.app/" // supply the url of your Netlify site instance with Identity enabled. VERY IMPORTANT


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <IdentityContextProvider value={url}>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </IdentityContextProvider>

);

