const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Songs',
  Key: {
    'year': 2013,
    'title': 'Gravity'
  },
  // ProjectionExpression: '#year, title, info.#rank',
  // ExpressionAttributeNames: {
  //   '#year': 'year',
  //   "#rank": 'rank',
  // },
};

const getItem = async () => {
  try {
    const item = await dynamodbDocumentClient.get(params).promise();
    console.log(item);
    return item;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getItem;