var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Songs',
  GlobalSecondaryIndexUpdates: [
    {
      Create: {
        IndexName: 'Title',
        KeySchema: [
          { AttributeName: 'title', KeyType: 'Hash' }
        ],
        Projection: {ProjectionType :'KEYS_ONLY'},
        ProvisionedThroughput: {
          ReadCapacityUnits: 0,
          WriteCapacityUnits: 0
        }
      }
    }
  ]
};

dynamodb.updateTable(params,
  (error, data) => {
    if(error) {
      console.error('Failed to update table', error)
    }
    else {
      console.log('update table successfully');
    }
  }
);