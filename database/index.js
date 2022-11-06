const gdpMongodb = require('gpd-mongodb');
const config = require('../config');

const database = () => gdpMongodb.client(config.db.mongodb.url, config.db.mongodb.dbName);
const merchants = () => gdpMongodb.mongodb(database(), config.mongodb.collection.merchants);
const logs = () => gdpMongodb.mongodb(database(), config.db.mongodb.collection.logs);

module.exports = {
    database: database(),
    logs: logs(),
    merchants: merchants()
}
