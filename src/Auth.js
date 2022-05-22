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




