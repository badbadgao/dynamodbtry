const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  // TableName: 'Songs',
  RequestItems: {
    'Songs': {
      'Keys': [
        {
          "year": 2013,
          "title": 'Gravity',
        },
        {
          "year": 2014,
          "title": 'Divergent',
        }
      ]
    }
  }
};

const getItems= async () => {
  try {
    const item = await dynamodbDocumentClient.batchGet(params).promise();
    console.log(item);
    return item;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getItems;