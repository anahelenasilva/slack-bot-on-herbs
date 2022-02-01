const merge = require('deepmerge')
const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const { User } = require('../../entities')

const useCase = ({ userRepository }) => () =>
  usecase('Update User', {
    // Input/Request metadata and validation 
    request: {
        id: Number,
        nickname: String,
        password: String
    },

    // Output/Response metadata
    response: User,

    //Authorization with Audit
    // authorize: (user) => (user.canUpdateUser ? Ok() : Err()),
    authorize: () => Ok(),

    //Step description and function
    'Check if the User exists': step(async ctx => {
      const user = await userRepository.findByID(parseInt(ctx.req.id))
      
      if (!user) return Err.notFound({
        message: 'The User entity is invalid',
        payload: { entity: 'User' }
      })

      const newUser = merge.all([ user, ctx.req ])
      ctx.user = User.fromJSON(newUser)
      
      // returning Ok continues to the next step. Err stops the use case execution.
      return Ok() 
    }),

    //Step description and function
    'Check if the User is valid': step(async ctx => {
      if (!ctx.user.isValid()) return Err.invalidEntity({
        message: 'The User entity is invalid', 
        payload: { entity: 'User' },  
        cause: ctx.user.errors
      })
      
      return Ok() 
    }),

    'Update the User': step(async ctx => {
      // ctx.ret is the return value of a use case
      return (ctx.ret = await userRepository.update(ctx.user)) 
    })
  })

module.exports = useCase