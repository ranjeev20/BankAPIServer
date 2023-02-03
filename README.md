# Bank Details REST API

This is an Express app that provides a REST API to search for bank details based on the branch name. The app reads a CSV file of bank details and returns the details of all banks with the specified branch name.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.js and npm installed on your machine

## Installing
1. Clone the repository:
    git clone https://github.com/ranjeev20/BankAPIServer.git
    
  2.Navigate to the project directory:
    cd BankAPIServer
    
  3.Install the dependencies:
    npm install

## Running the app
  1.start the app:
    npm start

  2.The app will start running on port 5000. 
   You can access the API at the following endpoint:
   
    http://localhost:5000/api/data/:branch
    
    where :branch is the name of the branch you want to search for.
  
## API Reference

 Endpoint
 
   GET /api/data/:branch
  
 Parameters
 
   branch: The name of the branch you want to search for.
   
   
 Response
 
  If the branch is found, the response will contain an array of bank details with the specified branch name.
  

![image](https://user-images.githubusercontent.com/91145878/216671871-03683f86-0bae-49fa-ace3-ce919c37c697.png)

  If the branch is not found, the response will contain a 404 status code and a message indicating that the branch was not found.

![image](https://user-images.githubusercontent.com/91145878/216672055-0b8cdfc0-3957-42ec-9de3-145447d877c7.png)

## Built With
  Node.js
  
  Express
  
  csv-parser
  
## Author

**@Ranjeev Bohara**

