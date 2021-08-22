const mongoose = require('mongoose');
const orderListModel = require('./model-order-lists');
const orderToppingsModel = require('./model-order-toppings');

const connection = mongoose.createConnection("mongodb+srv://kairos:kjf3su3k@kairoscluster.yajab.mongodb.net/orderingSystemDB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

// connected
connection.on('connected', () => {
    console.log('DB connected');
    //logger.DEBUG({ info: 'DB connected', connectionPath: _config.dbConnectionPath }, `[DB] [CONNECTED] [${_config.dbName}]`, 'connection-handler.js');
});

// reconnected
connection.on('reconnected', () => {
    console.log('DB reconnected');
    //logger.DEBUG({ info: 'DB reconnected', connectionPath: _config.dbConnectionPath }, `[DB] [RECONNECTED] [${_config.dbName}]`, 'connection-handler.js');
});

// close
connection.on('close', () => {
    console.log('DB closed');
    //logger.EMERGENCY({ info: 'DB closed', connectionPath: _config.dbConnectionPath }, `[DB] [CLOSED] [${_config.dbName}]`, 'connection-handler.js');
});
// disconnected
connection.on('disconnected', () => {
    console.log('DB disconnected');
    //logger.ERROR({ error: 'DB disconnected', connectionPath: _config.dbConnectionPath }, `[DB] [DISCONNECTED] [${_config.dbName}]`, 'connection-handler.js');
    connection.close();
});

// error
connection.on('error', err => {
    console.log('DB connection error');
    //logger.ERROR({ error: 'DB connection error', connectionPath: _config.dbConnectionPath, err }, `[DB] [ERROR] [${_config.dbName}]`, 'connection-handler.js');
    connection.close();
});

const orderToppings = orderToppingsModel(mongoose, connection);
const orderLists = orderListModel(mongoose, connection);

exports.orderToppings = orderToppings;
exports.orderLists = orderLists;

