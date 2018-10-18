PROJECT ASSESSMENT:
      Dropbox App is an application to showcase the use of the Dropbox api to fetch files and folders, delete them and display previews of files. The Application requests permission to view your dropbox files and folders after which if request is granted, display them for you to see.

PACKAGES:

DROPBOX API:
    To be able to use the required functions like getAuthenicationUrl and many more to make requests to the dropbox api.
    
Bootstrap: 
    To give the site a responsive, mobile-first design feeling.
    
Redux: 
    To keep application state consistent across every page. 
    
Redux-thunk:
    To be able to perform asynchronous requests. A thunk is a function that wraps an expression to delay its evaluation.
    
react-router-dom:
    For the routing mechanism across the app.
    
es6-promise:
    Dropbox library depends on the Promise global which requires a polyfill (es6-promise) for unsupported browsers.
    
isomorphic-fetch:
    This adds fetch as a global so that its API is consistent between client and server.
    
Enzyme:
    Allows us to render isolated components without needing the render the whole application


Prerequisites:
  GIT,
  NodeJS

Development Environment:
    Clone the repository on your local machine and run npm install to install the required packages. Then run npm start to start the application

    npm install - to install required packages
    npm start - to start the Node server
    npm test - to run tests
    


    
     

