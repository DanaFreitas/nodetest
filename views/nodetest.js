  const express = require('express')
  const app = express()
  const port = 3000;
  const path = require('path');
  const router = express.Router();

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

   app.get('/', (req, res) => {
       res.send('Successful response.');
       res.render('home', {title: "monkey" });
       console.log(title)
  });

//  app.get('/monkey', (req, res) => {
//   res.send('Successful monkey.');
// console.log("TELEPORT SUCCESSFUL")
// });

app.use('/',router)
  app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))



/*
let ham = document.getElementById("test")

ham.addEventListener("click", () => {
    document.getElementById("test2").style.backgroundColor = "green";
console.log("It works")  
});
  */
