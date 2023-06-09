const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.theme = require('./theme.js')(mongoose);
db.apostle = require('./apostle.js')(mongoose);

module.exports = db;
