var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremailaddress@gmail.com',
    pass: 'PASSWORD'
  }
});

var mailOptions = {
  from: 'youremailaddress@gmail.com',
  to: 'receiveremail@gmail.com',
  subject: 'Sending Email using Node.js for the first time',
  text: 'Hello darkness my old friend'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});