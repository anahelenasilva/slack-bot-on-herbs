const { usecase, step, Ok, Err } = require('@herbsjs/herbs')

const useCase = slackClient => () =>
	usecase('Create a message to send to Slack Bot', {
		request: {
			message: String
		},

		response: String,

		authorize: () => Ok(),

		'Send message to Slack': step(async ctx => {
			try {
				await slackClient.sendMessage(ctx.req.message)
				return Ok(ctx.ret = "Message sent")
			} catch (error) {
				return Err(error)
			}
		}),

	})

module.exports = useCase