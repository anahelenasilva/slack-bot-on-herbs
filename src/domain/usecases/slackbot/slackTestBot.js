const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const Axios = require("axios")

const useCase = () => () =>
	usecase('SlackBot', {
		request: {},

		response: String,

		authorize: () => Ok(),

		'Send message to Slack': step(async ctx => {

			await Axios.post(
				process.env.SLACK_URL,
				{
					blocks: [
						{
							type: "section",
							text: {
								type: "mrkdwn",
								text: `teste do herbs`,
							},
						},
					],
				}
			)

			return Ok(ctx.ret = "ok")

		}),

	})

module.exports = useCase