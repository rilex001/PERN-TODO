const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport")
//middleware

app.use(cors());
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.get('/authentication/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/authentication/google/callback', 
  passport.authenticate('google', { failureRedirect: '/authentication' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});



