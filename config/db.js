// config/db.js
const path = require('path');
const mariadb = require('mariadb');
require('dotenv').config({ path: `${__dirname}/../../blog-private/env/.env` });

// MariaDB 연결 풀을 생성합니다.
const pool = mariadb.createPool({
  host: process.env.DB_HOST,        // .env 파일에서 설정한 DB 호스트
  user: process.env.DB_USER,        // .env 파일에서 설정한 DB 사용자명
  password: process.env.DB_PASSWORD, // .env 파일에서 설정한 DB 비밀번호
  database: process.env.DB_NAME,     // .env 파일에서 설정한 DB 이름
  connectionLimit: 5                // 최대 연결 수
});

// 연결 풀을 내보내어 다른 파일에서 사용할 수 있도록 합니다.
module.exports = pool;
