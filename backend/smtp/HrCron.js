const nodemailer = require('nodemailer')

const sendEmailHr = () => {
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
            subject:'Need to be managed',
            text: "Submition Request Form, Cek kembali, abaikan jika sudah"
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


module.exports = sendEmailHr