// config/server.js
const express = require('express');
const path = require('path');
const indexController = require('../controllers/indexController');

const app = express();
const PORT = 3000;

// ejs 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // views 폴더 경로 설정

app.use(express.json());

// 게시글 관련 API
app.get('/', indexController.getIndex);

// 서버 실행
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
