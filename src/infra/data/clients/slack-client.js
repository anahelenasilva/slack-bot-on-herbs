const Axios = require("axios")

class SlackClient {
    constructor () { }
    async sendMessage (message) {
        console.log('message', message)
        await Axios.post(
            process.env.SLACK_URL,
            {
                blocks: [
                    {
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: message,
                        },
                    },
                ],
            }
        )
    }
}

module.exports = SlackClient