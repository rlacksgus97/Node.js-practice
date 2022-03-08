const passport = require('passport');
const local = require('./localStrategy');
// const kakao = require('./kakaoStrategy');
const User = require('../models/user');

let cachedUser;

module.exports = () => {
    //serializeUser : 로그인 시 실행
    passport.serializeUser((user, done) => {
        //req.session에 저장할 데이터 결정
        done(null, user.id);
    });

    //desrializeUser : 매 요청 시 실행
    passport.deserializeUser(async (id, done) => {
        if (!cachedUser) {
            const user = await User.findOne({
                where: {id},
                include: [{
                    model: User,
                    attributes: ['id', 'nick'],
                    as: 'Followers',
                }, {
                    model: User,
                    attributes: ['id', 'nick'],
                    as: 'Followings',
                }],
            })
            //done()으로 req.user에 user 저장
            // .then(user => done(null, user))
            // .catch(err => done(err));
            cachedUser = user;
            done(null, user);
        } else {
            done(null, cachedUser);
        } 
    });

    local();
    // kakao();
};