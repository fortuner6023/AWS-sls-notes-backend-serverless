// Route get /note/n/{id}

const AWS = require('aws-sdk')
AWS.config.update({region:'ap-south-1'})
const util = require('./util')

const dynamoDb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.TABLE_NAME

exports.handler = async (event)=>{
    try {
        return{
            statusCode:200,
            headers: util.getResponseHeaders,
            body: JSON.stringify()
        }
    } catch (error) {
        console.log('Error',error);
        return{
            statusCode : err.statusCode ? err.statusCode : 500,
            header : util.getResponseHeaders,
            body: json.stringify({
                error: error.name ? error.name : 'Exception',
                message: error.message ? error.message : 'Unknown error'
            })
        }
        
    }
}