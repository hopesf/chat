//bu arkadas kontrolcu(middleware)
//bunun olayi app,js de cagrildigi fonksiyon yerinde oraya ara bi kontrol olayi atamasi

function isAuthenticated(req,res,next) {
    if (req.isAuthenticated())
        next();
    else
        res.redirect('/');
}

module.exports = isAuthenticated;