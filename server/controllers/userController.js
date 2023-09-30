import User from "../models/userModel.js";

//create and update user
const createUser = async (req, res) => {
    if (req.oidc.isAuthenticated()) {
        const auth0User = req.oidc.user;
    
        try {
          // Check if a user with the same auth0Id exists in your database
          let user = await User.findOne({ auth0Id: auth0User.sub });
    
          if (!user) {
            // If the user doesn't exist, create a new user document
            user = new User({
              auth0Id: auth0User.sub,
              email: auth0User.email,
              firstName: auth0User.given_name,
              lastName: auth0User.family_name,
            });
            await user.save(); // Save the new user document to the database
          } else {
            // If the user already exists, update their profile with any new information
            user.email = auth0User.email;
            user.firstName = auth0User.given_name;
            user.lastName = auth0User.family_name;
            await user.save();
          }

          res.send(`Welcome, ${auth0User.given_name} ${auth0User.family_name}!`);
          
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      } else {
        res.send('Not authenticated. Please log in.');
      }
}

export default createUser;