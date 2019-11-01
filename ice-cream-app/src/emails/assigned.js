//Handling of email sending service
//Using SendGrid

//Requiring sendGrid
const sgMail = require('@sendgrid/mail')

//Defining the API key (string was provided by the website)
const sendgridAPIKey = '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'

//Setting the API key
sgMail.setApiKey(sendgridAPIKey)

//Most fields of this function have been hardcoded and should probably be modified to provide more options. It sends
//the text to the specified email and also greets the recipient by their name
const sendEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'tomasdiaz898@hotmail.com',
        subject: 'You have been chosen',
        text: `Dear ${name},  please call Baskin Robbins (809 331-3131)‬ and have our orders delivered to the main entrance of PUCMM FCSI`
})}

module.exports = {
    sendEmail
}