PROCEDURES/METHOD DESCRIPTION:


We have to make use of the express framework that is built on top of nodejs.
I have made a REST API with the API “/api/data/:branch”.

As we know that our file is huge, and if we go and process the file to load into the memory it would be very slow. So instead of that what we can do is make use of the npm package called ‘fs’ that provides us with an API of createReadStream which helps us to load the data into the memory in small chunks rather than loading all of it.

After reading the csv file, we have to convert it to the array of an object, for that purpose I have made an npm package called ‘csv-praser’.

The pipe function is used to redirect or refer our loaded data so that csv() will convert it into an array of objects.

After doing all the above steps we can now read the given data in the data variable as shown in the code. 
To get the specific data we have passed a slug called ‘branch’ for our API. We can access it using ‘req.params.branch’ and compare it with the actual objects. If the corresponding branch is present we push it to the temporary array called result.

After all the data has been read from the file if the result is empty then we know that the corresponding branch is not present so we send a message called ‘Branch not found’ else we send the actual result that has been fetched.

In the end, we set the result to an empty array so that current data is not appended with the previous data on every request by the user. It helps to make sure that each and every result that we send is unique and not redundant.


TIME TAKEN:

For research: 40min(Approx)
For coding:30min(Approx)
For Debugging: 40min(Approx)
For Deploying: 15min(Approx)
For readme file and other stuff: 40 min(Approx)

