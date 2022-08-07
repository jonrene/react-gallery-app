# React photo gallery application
# Jonathan Rene
# 8/7/22

# Summary
This project demonstrates using demonstrates building an SPA with React. It allows users
to search photos on Flickr. A user can either click on the provided buttons to perform a search or type in a search in the search box. 

# How to use
In order to use this application, a user must have Node and NPM installed. They must open the application on any command line tool and run "npm install" and then run "npm start".

The user must also have an API key from Flickr. The API key must be stored as a string property within a JS object. This object must then be stored within a file called "config.js" that the user must create within the "src" directory of the project. The config.js file must look something like this:

const apiInfo = {
    key: "API_KEY",
};

export default apiInfo;

# What to know
This application uses the most current version of React and React Router. All application components are implemented using function components

