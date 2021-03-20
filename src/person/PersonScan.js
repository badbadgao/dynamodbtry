const dynamodb = require('./awsDynamoDbClient');
const dynamodbDocumentClient = require('./awsDynamoDbClient');

// Query use beginsWith, between :a and :b
const params = {
  TableName: 'Songs',
  FilterExpression: "#year < :year and begins_with(title, :titleFrom)",
  ExpressionAttributeNames: {
    '#year': 'year',
  },
  ExpressionAttributeValues: {
    ':year': 1990,
    ':titleFrom': 'A',
    // ':titleTo': 'B'
  },
  ProjectionExpression: '#year, title',
  // Limit: 1000,
};

const onScan = (error, data) => {
  if(error) {
    console.error('Failed to find items', error);
  }
  else {
    console.log('Successfully find items', data);
    if(data.LastEvaluatedKey) {
      params.ExclusiveStartKey = data.LastEvaluatedKey;
      dynamodbDocumentClient.scan(params, onScan);
    }
  }
};

dynamodbDocumentClient.scan(
  params,
  onScan,
);
