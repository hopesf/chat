const session = require('express-session');
const redisStore = require('connect-redis')(session);

//bu arkadasin olayi session veritabani, yapilan sessionlar bu redisde tutuluyor
//assagidada baglanti kodu var, olay bu

module.exports = new redisStore({
   host: process.env.REDIS_URI,
   port: process.env.REDIS_PORT,
   pass: process.env.REDIS_PASS
});