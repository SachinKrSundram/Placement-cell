const User = require("../models/user");




//render the sign up page
module.exports.signUp = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect("/profile");

    }
    return res.render("sign up.ejs");
};