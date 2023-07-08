const express = require('express')
 const app = express()
 const port = 3000;
 const path = require('path');
 const router = express.Router();

require('dotenv').config();

const sgMail = require('@sendgrid/mail') 

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)





const apiKey = process.env.SENDGRID_API_KEY;
console.log(apiKey)












 const msg = {
   to: 'danarobertfreitas@gmail.com',  //Change to your recipient
   from: 'danarobertfreitas@gmail.com',  //Change to your verified sender
   subject: 'Sending with SendGrid is Fun',
   text: 'and easy to do anywhere, even with Node.js',
   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
 }
 sgMail
   .send(msg)
   .then(() => {
     console.log('Email sent')
   })
   .catch((error) => {
     console.error(error)
   })



  
 

   app.set('views', path.join(__dirname, 'views'))
   app.set('view engine', 'ejs')

    app.get('/', (req, res) => {
        res.render('home', {title: "anime" });
   });

   app.get('/monkey', (req, res) => {
    res.send('Successful monkey.');
  console.log("TELEPORT SUCCESSFUL")
  });
 app.use('/',router)

 app.use(express.static(__dirname + '/public'));
 app.use(express.static('public'));


 app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))


 // using Twilio SendGrid's v3 Node.js Library
  //https:github.com/sendgrid/sendgrid-nodejs


 /*
 let ham = document.getElementById("test")

 ham.addEventListener("click", () => {
     document.getElementById("test2").style.backgroundColor = "green";
 });
   */
