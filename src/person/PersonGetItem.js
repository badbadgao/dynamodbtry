const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodbDocumentClient = new AWS.DynamoDB.DocumentClient();

const params = (year, title) => ({
  TableName: 'Songs',
  Key: {
    'year': year,
    'title': title
  },
  // ProjectionExpression: '#year, title, info.#rank',
  // ExpressionAttributeNames: {
  //   '#year': 'year',
  //   "#rank": 'rank',
  // },
});

const getItem = async (year, title) => {
  try {
    const item = await dynamodbDocumentClient.get(params(parseInt(year), title)).promise();
    console.log(item);
    return item;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getItem;