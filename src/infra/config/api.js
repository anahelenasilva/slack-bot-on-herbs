const env = require('sugar-env')
require('dotenv').config()

module.exports = {
  port: env.get(['GRAPHQL_PORT', 'API_PORT'], 3000),
}
