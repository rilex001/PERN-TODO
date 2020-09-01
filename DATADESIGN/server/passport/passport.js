const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 500279492711-p3rc83687pn3eo3numk6jtchetorsr7g.apps.googleusercontent.com,
    clientSecret: UeYeQS8Q4-iArtG5CgjNTRSa,
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));