fs = require('fs');

const data = fs.readFileSync('./chapter03/sec03/example.txt', 'utf-8'); //인코딩 지정

// fs.existsSync : 해당 파일이 존재하는지 여부를 boolean으로 반환
if (fs.existsSync('./chapter03/sec03/text-1.txt')) {
  console.log('file already exist');
} else {
  fs.writeFileSync('./chapter03/sec03/text-1.txt', data);
}
