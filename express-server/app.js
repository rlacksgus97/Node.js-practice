const express = require('express');
const path = require('path');

const app = express();
// set : (키, 값)으로 데이터 저장
app.set('port', process.env.PORT || 3000);

// use : 미들웨어를 사용하기 위해 사용
app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    //next : 다음 미들웨어로 넘어감
    next();
});

// get : (주소, 라우터) GET 요청 처리
app.get('/', (req, res, next) => {
    // res.send('Hello, Express');
    // res.sendFile(path.join(__dirname, '/index.html'))
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});