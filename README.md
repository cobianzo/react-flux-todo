# flux-shell

This is a very simple hello world app that you can use as a starting point for your application.

# Usage

```bash
cd path/to/flux-shell
npm install
npm run build
# open path/to/flux-shell/index.html in your browser
```

# Watch

Instead of manually building after each change it's possible to automatically recompile the javascript bundle when files change:

```bash
npm run watch
# make javascript changes, then refresh path/to/flux-shell/index.html
```


# Developing a Flux App

## Flux

- AppContainer.js (unique for all the app)      
Declares the state, accessible only through getState.  
    - State is a set of Stores.  
    - Declaration of Events that trigger Actions.  
        - Eventually we could call the Actions from outside the App from any js code.  
    - State Modifiable only through Actions, defined in the Stores.  

- Store.js (store1, store2 ...)  
A set of Records (ie posts) / Only 1 record with props (ie settings).  
Code for actions declared in AppContainer.  
        
- View.js  (view1, view 2 ...)
JSX that 
    - show the State data
    - trigger the Events declared in AppContainer