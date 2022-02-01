const env = require('sugar-env')
require('dotenv').config()


module.exports = {
  dbName: env.get(`$MONGO_DATABASE`, ''),
  connstr: env.get(`$MONGO_CONN_STR`, 'mongodb://localhost:27017'),
}
