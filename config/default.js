require('dotenv').config();

module.exports = { 
    environment: process.env.NODE_ENV,
    nam: process.env.NAME,
    app: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
        tls: process.env.tls
    },
    bex: {
        host: process.env.API_BEXS_ROUTES_MERCHANTS,
        resource: process.env.API_MERCHANT_RESOURCE,
    },
    db: {
        mongodb: {
            url: process.env.DB_MOONGODB_URL,
            dbName: process.env.DB_MONGODB_NAME,
            collections: {
                logs: process.env.DB_MOONGODB_URL,
                merchants: process.env.MONGODB_MERCHANTS_COLLECTION
            }
        }
    }
}