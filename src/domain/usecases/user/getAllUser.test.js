const getAllUser = require('./getAllUser')
const assert = require('assert')

describe('Find Users', () => {
    function aUser({ hasAccess }) {
      return { hasAccess }
    }

    it('should return all Users', async () => {
      // Given
      const req = { limit:0, offset:0}
      const injection = {
        userRepository: new ( class userRepository {
          async  findAll() { return [] }
        })
      }
      const user = aUser({ hasAccess: true })

      // When
      const uc = getAllUser(injection)()
      await uc.authorize(user)
      const ret = await uc.run(req)

      // Then
      assert.ok(ret.isOk)
    })
})
