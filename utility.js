const fs = require('fs');
const JSONStream = require('JSONStream');
var fetchedData = []


const getData = (branch) => {
    fs.createReadStream('./Data/bankDetails.json')
    .pipe(JSONStream.parse('*'))
    .on('data', function (data) {
      if(data.branch === branch) {
        // console.log("hit")
        fetchedData.length =0
        fetchedData.push(data); 
        console.log(fetchedData)
      }
    })

    return fetchedData
    // console.log(fetchedData)
}



module.exports = getData;