//require : 외부 모듈을 가져옴, 추가할 모듈의 경로를 인자로 받음
const http = require('http');

//createServer : 콜백 함수를 인자로 받음, req 발생 -> 콜백 함수 -> res 제공
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
//listen : 포트 번호, 포트 연결 완료 후 실행될 콜백 함수를 인자로 받음
.listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
})