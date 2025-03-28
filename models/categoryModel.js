const pool = require('../config/db'); // config/db.js에서 pool 불러오기
const mybatisMapper = require('mybatis-mapper');
const path = require('path');

// 매퍼 파일 경로 설정 (절대 경로 사용)
mybatisMapper.createMapper([path.resolve(__dirname, '../mappers/categoryMapper.xml')]);
const format = { language: 'sql', indent: '  ' };

class CategoryModel {
    
    // 카테고리별 게시글 개수 조회
    async getPostCountByCategory() {
        let conn;
        try {
            conn = await pool.getConnection();
            const sql = mybatisMapper.getStatement('CategoryMapper', 'getPostCountByCategory', {}, format);
            const rows = await conn.query(sql);
            return rows;
        } finally {
            if (conn) conn.release();
        }
    }
}

module.exports = CategoryModel;
