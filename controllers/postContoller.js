// controllers/postController.js
const PostModel = require('../models/postModel');
const postModel = new PostModel();

const getPosts = async (req, res) => {
    try {
        // 모델을 통해 데이터 가져오기
        const posts = await postModel.getPostsByCategory();
        // 가져온 데이터를 postView.html로 렌더링
        res.render('postView', { posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getPosts };
