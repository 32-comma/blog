const pool = require('../config/db'); // config/db.js에서 pool 불러오기
const mybatisMapper = require('mybatis-mapper');
const path = require('path');

// 매퍼 파일 경로 설정 (절대 경로 사용)
mybatisMapper.createMapper([path.resolve(__dirname, '../mappers/postMapper.xml')]);
const format = { language: 'sql', indent: '  ' };

class PostModel {
    // // 카테고리별 게시글 가져오기
    // async getPostsByCategory() {
    //     let conn;
    //     try {
    //         conn = await pool.getConnection();
    //         // MyBatis 매퍼를 사용하여 SQL 쿼리 가져오기
    //         const sql = mybatisMapper.getStatement('PostMapper', 'getPostsByCategory', {}, format);
    //         const rows = await conn.query(sql);
    //         return rows;
    //     } finally {
    //         if (conn) conn.release();
    //     }
    // }

    // // 특정 카테고리 게시글 가져오기
    // async getPostsByCategoryName(categoryName) {
    //     let conn;
    //     try {
    //         conn = await pool.getConnection();
    //         const params = { categoryName };
    //         const sql = mybatisMapper.getStatement('PostMapper', 'getPostsByCategoryName', params, format);
    //         const rows = await conn.query(sql);
    //         return rows;
    //     } finally {
    //         if (conn) conn.release();
    //     }
    // }

    // // 카테고리별 게시글 개수 조회
    // async getPostCountByCategory() {
    //     let conn;
    //     try {
    //         conn = await pool.getConnection();
    //         const sql = mybatisMapper.getStatement('PostMapper', 'getPostCountByCategory', {}, format);
    //         const rows = await conn.query(sql);
    //         return rows;
    //     } finally {
    //         if (conn) conn.release();
    //     }
    // }
}

module.exports = PostModel;
