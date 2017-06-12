var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mansurtasnim@gmail.com',
        pass: 'tassu786'
    }
});

var mailOptions = {
    from: 'mansurtasnim@gmail.com',
    to: 'lanetteam.tasnimm@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});