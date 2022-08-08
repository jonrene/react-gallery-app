# React photo gallery application
# Jonathan Rene
# 8/7/22

# Summary
This project demonstrates using demonstrates building an SPA with React. It allows users
to search photos on Flickr. A user can either click on the provided buttons to perform a search or type in a search in the search box. 

# How to use
The user must have an API key from Flickr. The API key must be stored as a string property within a JS object. This object must then be stored within a file called "config.js". That file has already been created. It is located within the "src" folder/directory. Within the files exists an object called "apiInfo". The user simply needs tto replace the "key" property's value of "API_KEY" to the string value of his or her Flickr API key. The file looks like this:

const apiInfo = {
    key: "API_KEY",
};

export default apiInfo;

In order to use this application, a user must have Node and NPM installed. They must open the application on any command line tool and run "npm install" and then run "npm start".

# What to know
This application uses the most current version of React and React Router. All application components are implemented using function components

