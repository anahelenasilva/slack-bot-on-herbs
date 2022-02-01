module.exports = [
    { usecase: require('./user/getAllUser'), tags: { group: 'Users', type: 'read' } },
    { usecase: require('./slackbot/slackTestBot'), tags: { group: 'slack', type: 'read' } }
]