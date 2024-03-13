import { createTransport } from 'nodemailer'
import { mail_host, mail_port, mail_user, mail_pass } from '../config.js'

const transporter = createTransport({
    host: mail_host,
    port: mail_port,
    secure: true, // true for 465, false for other ports
    auth: {
        user: mail_user, // generated ethereal user
        pass: mail_pass, // generated ethereal password
    },
})

function sendMail(to, code) {
    const message = {
        from: `"Fan Lab Online" <${mail_user}>`, // sender address
        to: to, // list of receivers
        subject: 'Fan Lab Online 注册验证', // Subject line
        text: `您的注册验证码为 ${code} ，有效期3分钟。`, // plain text body
    }
    transporter.sendMail(message)
}

export default sendMail
