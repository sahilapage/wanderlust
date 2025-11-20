const User = require("../models/user");

module.exports.showSignUp = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signUp = async(req, res) => {
    try{
        let{username, email, password} = req.body;
        let newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);  
            }
            req.flash("registered", "SignedUp Successfully!")
            res.redirect("/listings");
        })  
    } catch (err) {
        req.flash("err", err.message);
        res.redirect("/signup");
    }
};

module.exports.showLogIn = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.logIn = async(req, res) => {
    req.flash("logedin", "Welcome back to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("created", "You are Logged Out successfully!");
        res.redirect("/listings");
    });
};