// controllers/postController.js
const CategoryModel = require('../models/categoryModel');
const categoryModel = new CategoryModel();

const getIndex = async (req, res) => {
    try {
        // 카테고리별 게시글 개수 조회
        const categories = await categoryModel.getPostCountByCategory();
        // 가져온 데이터를 postView.html로 렌더링
        res.render('indexView', { categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getIndex };
