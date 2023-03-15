const nodemailer = require('nodemailer')

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'fadlifirdass@gmail.com',
                //edited
                pass:'vqcjubrkazudpfyx'
            }
        })
    
        const mail_configs = {
            from:'fadlifirdass@gmail.com',
            to:'fadli99xyz@gmail.com',
            subject:'Request pengajuan form',
            text: "Nama : John Doe, Request Form"
        }
        transporter.sendMail(mail_configs, function(error, info){
            if(error){
                console.log(error)
                return reject({message: `ada error!`})
            }
            return resolve({message: "Email sent success!"})
        })
    })
}


module.exports = sendEmail