const { User } = require('../../../domain/entities')
const { Repository } = require('@herbsjs/herbs2mongo')

module.exports = class UserRepository extends Repository {
    constructor(connection){
        super({ 
            entity: User,
            collection: 'user',
            ids: ['id'],  
            mongodb: connection
        })
    }
}