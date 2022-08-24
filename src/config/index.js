const dotenv = require('dotenv');
const envFound = dotenv.config();

if(!envFound){
    throw new Error(".env file not found");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';   

module.exports = {
    port: process.env.PORT,
    api:{
       prefix: '/api/v1'        
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/api-docs'
    },
    databaseURL:process.env.DATABASE_URL
       
       
}