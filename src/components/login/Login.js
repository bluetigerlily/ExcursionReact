import * as React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget'




export default function Login() {

 
    const IdentityModal = React.lazy(() => import("react-netlify-identity-widget"))
    const identity = useIdentityContext()
    const [dialog, setDialog] = React.useState(false)
    const isLoggedIn = identity && identity.isLoggedIn
   

    return (
    <div className='loginContainer'>
        <button className="btn" onClick={() => setDialog(isLoggedIn)}>
            {isLoggedIn ? "LOG OUT" : "LOG IN"}
        </button>
        <React.Suspense fallback="loading...">
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </React.Suspense>
    </div>
        );
    }
