const express = require('express');
const path = require('path');

const app = express();
// set : (키, 값)으로 데이터 저장
app.set('port', process.env.PORT || 3000);

// get : (주소, 라우터) GET 요청 처리
app.get('/', (req, res) => {
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});