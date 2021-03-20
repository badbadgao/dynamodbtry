var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Songs',
  KeySchema: [
    {AttributeName: 'year', KeyType: 'HASH'},
    {AttributeName: 'title', KeyType: 'RANGE'},
  ],
  AttributeDefinitions: [
    {AttributeName: 'year', AttributeType: 'N'},
    {AttributeName: 'title', AttributeType: 'S'}
  ],
  ProvisionedThroughput: {       
    ReadCapacityUnits: 10, 
    WriteCapacityUnits: 10
  },
};

dynamodb.createTable(
  params,
  (error, data) => {
    if (error) {
      console.log('Failed to create table')
    }
    else {
      console.log('Create table successfully')
    }
});

dynamodb.updateTable()