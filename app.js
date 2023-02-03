const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/data/:branch', (req, res) => {
  fs.readFile('./Data/bankDetails.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Error reading the file' });
      return;
    }

    const bankDetails = JSON.parse(data);
    const result = [];

    for (const bank of bankDetails) {
        const branchName = req.params.branch.toUpperCase()
      if (bank.branch === branchName) {
        result.push(bank);
      }
    }

    if (result.length === 0) {
      res.status(404).send({ message: 'Branch not found' });
    } else {
      res.send(result);
    }
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
