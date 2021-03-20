var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Songs',
  Item: {
    'year': 1905,
    'title': 'My heart will go on',
    'author': {
      'name' : 'Wei Gao',
      'age': 31,
    },
  },
};

dynamodbDocumentClient.put(
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