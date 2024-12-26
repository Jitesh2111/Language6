const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/Person");

passport.use(
  new LocalStrategy(async (usernames, password, done) => {
    try {
      console.log("Received credentials:", usernames, password);

      const user = await Person.findOne({ username: usernames });

      if (!user) return done(null, false, { message: "Incorrect username" });

      const isPasswordMatch = await user.comparePassword(password)

      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      return done(error);
    }
  })
);


module.exports = passport;
