var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Songs',
  AttributeDefinitions: [
    {AttributeName: 'year', AttributeType: 'N'}
  ]
};

dynamodb.batchGetItem

dynamodb.updateTable(params,
  (error, data) => {
    if(error) => {
      console.error('Failed to update table', error)
    }
    else {
      console.log(Update sucessfully)
    }
  }
);