var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

// Query use beginsWith, between :a and :b
const params = {
  TableName: 'Songs',
  KeyConditionExpression: "#year = :year and begins_with(title, :titleFrom)",
  ExpressionAttributeNames: {
    '#year': 'year',
    // '#rank': 'info.rank'
  },
  ExpressionAttributeValues: {
    ':year': 2013,
    ':titleFrom': 'A',
    // ':titleTo': 'B'
  },
  ProjectionExpression: '#year, title, info',
  // Limit: 2,
};

dynamodbDocumentClient.query(
  params,
  (error, data) => {
    if(error) {
      console.error('Failed to find items', error);
    }
    else {
      console.log(data);
      console.log(data.Items[0].info);
      // console.log('Successfully find items', data);
    }
  }
);
