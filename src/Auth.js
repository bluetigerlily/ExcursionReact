const netlifyIdentity = require('netlify-identity-widget');

netlifyIdentity.init({
  container: '#netlify-modal', // defaults to document.body
  locale: 'en' // defaults to 'en'
});

netlifyIdentity.open(); // open the modal
netlifyIdentity.open('login'); // open the modal to the login tab
netlifyIdentity.open('signup'); // open the modal to the signup tab

netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('open', () => console.log('Widget opened'));
netlifyIdentity.on('close', () => console.log('Widget closed'));



// Close the modal
netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();

// refresh the user's JWT
// Note: this method returns a promise.
netlifyIdentity.refresh().then((jwt)=>console.log(jwt))

// Change language
netlifyIdentity.setLocale('en');


const updateLoginText = ()=>{
    document.getElementById("primary-text").textContent="Looks like you've logged in successfully! Now try clicking the 'Test Auth' link at the top!"
}
const compareDate = (exp) => {
    const d = Date.now()
    if (d > exp){
    console.log("Your identity session has expired")
    netlifyIdentity.logout();
    netlifyIdentity.open();
    } else {
    console.log("the token hasn't expired, yet")
    updateLoginText()
    }
}
if (window.netlifyIdentity) {
    netlifyIdentity.on("login", user => {
    console.log(user)
    compareDate(user.token.expires_at)
    });
    window.netlifyIdentity.on("init", user => {
    if (!user) {
        window.netlifyIdentity.on("login", () => {
            updateLoginText()
        });
    }
});   
}


if (window.netlifyIdentity){
netlifyIdentity.on("init", user => console.log(user));
netlifyIdentity.on("open", () => console.log("Widget opened"));
netlifyIdentity.on("close", () => console.log("Widget closed"));
}



