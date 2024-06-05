fs = require('fs');

const data = fs.readFileSync('./chapter03/sec03/example.txt', 'utf-8'); //인코딩 지정
// fs.writeFileSync : 동기로 파일 쓰기
fs.writeFileSync('./chapter03/sec03/text-1.txt', data);
