var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  RequestItems: {
    "Songs": [
      {
        PutRequest: {
          Item: {
            'year': 1989,
            'title': 'What man',
            'author': {
              'name' : 'Wei Gao',
              'age': 31,
            },
          }
        }
      },
      {
        PutRequest: {
          Item: {
            'year': 1990,
            'title': 'Red bean',
            'author': {
              'name' : 'Jamie wu',
              'age': 10,
            },
          }
        }
      }
    ]
  }
};

dynamodbDocumentClient.batchWrite(
  params,
  (error, data) => {
    if(error) {
      console.log("Failed to put item", error)
    }
    else {
      console.log("Put item successfully.", data);
    }
  }
);