# db 연결해보기
npm init -y
npm install mysql2 // mysql패키지와 달리 promise 객체로 반환해줌




```javascript
npm install mysql2
//는 드라이버 설치. 연결을 위한.

```
파일 생성하기
db.js
```javascript
const mysql = require('mysql2/promise') //object

const pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'mysqlpwd',
    database : 'homepage',

})
//mysql -uroot -> user root
```