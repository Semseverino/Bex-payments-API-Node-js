require('dotenv').config({  path: './test.env' });

module.exports = {
    environment: process.env.NODE_ENV,
    certificates: {
        certificate: process.env.CERTIFICATE_CERTIFICATE,
        private_key: process.env.CERTIFICATE_KEY
    },
    app: {
        port: process.env.APP_PORT,
        host: process.env.APP_HOST,
        tls: process.env.APP_TLS
    },
    db: {
        mongodb: {
            collections: {
                merchants: process.env.DB_MONGODB_MERCHANTS_COLLECTION,
                logs: process.env.DB_MONGODB_LOGS_COLLECTION
            }
        }
    },
    morgan: {
        filter: process.env.MORGAN_FILTER_STATUS_CODE_GREATER_THAN,
        format: process.env.MORGAN_FORMAT,
    },
        
}