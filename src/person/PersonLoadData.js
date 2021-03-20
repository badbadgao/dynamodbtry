var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing data...........')
const jsonData = JSON.parse(fs.readFileSync('moviedata.json', 'utf-8'));
console.log('Putting items.........')

jsonData.forEach(song => {
  const itemParams = {
    TableName: 'Songs',
    Item: {
      'year': song.year,
      'title': song.title,
      'info':  song.info,
    },
  };
  dynamodbDocumentClient.put(
    itemParams,
    (error, data) => {
      if(error) {
        console.error('Failed to put item', error);
      }
      else {
        console.log("Put item succesfully.", data);
      }
    }
  )
});

console.log('importing data done!')