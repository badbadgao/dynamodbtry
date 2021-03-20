var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Songs',
};

dynamodb.deleteTable(
  params,
  (error, data) => {
    if(error) {
      console.error(error)
    }
    else {
      console.log(data);
    }
  }
);