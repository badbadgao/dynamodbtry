const AWS = require('aws-sdk');
// const getItem = require('./PersonGetItem');

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
          "title": 'Gravity'  
        },
        {
          "year": 2014,
          "title": 'Divergent'
        },
        {
          "year": 1990,
          "title": 'Red bean'
        },
        {
          "year": 1989,
          "title": 'What man'
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

getItems();

module.exports = getItems;