const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

app.get('/api/data/:branch', (req, res) => {
  fs.createReadStream('./Data/bank_branches.csv')
    .pipe(csv())
    .on('data', (data) => {
      if (data.branch === req.params.branch.toUpperCase()) {
        result.push(data);
      }
    })
    .on('end', () => {
      if (result.length === 0) {
        res.status(404).send({ message: 'Branch not found' });
      } else {
        res.send(result);
      }
    });

  let result = [];
});

app.listen(5000, () => {
  console.log('Server listening on port 3000');
});
