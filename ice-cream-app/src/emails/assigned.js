const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'tomasdiaz898@hotmail.com', //this was just a test - needs to be updated to user's email
    from: 'tomasdiaz898@hotmail.com',
    subject: 'You have been chosen',
    text: 'Call Baskin Robbins (809 331-3131)‬ and have our orders delivered to the main entrance of PUCMM FCSI'
})