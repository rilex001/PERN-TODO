const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: 500279492711-p3rc83687pn3eo3numk6jtchetorsr7g.apps.googleusercontent.com,
    clientSecret: UeYeQS8Q4-iArtG5CgjNTRSa,
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    //use the profile info to check if user is register in out db
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));