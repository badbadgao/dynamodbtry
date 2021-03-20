var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Songs',
  ExpressionAttributeNames: {
    '#rank': 'info.rank',
  },
  Key: {
    'year': 2013,
    'title': "Gravity",
  },
  UpdateExpression: "remove #rank set info.#rank=:ranking",
  ExpressionAttributeValues: {
    ':ranking': 14,
  },
  ReturnValues:"UPDATED_NEW"
};

dynamodbDocumentClient.update(
  params,
  (error, data) => {
    if(error) {
      console.log("Failed to update item", error)
    }
    else {
      console.log("Update item successfully.", data);
    }
  }
);