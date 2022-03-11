const express = require('express');
// const Article = require('../models/article');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render("articles/new");
})
// router.get('/:id', (req, res) => {

// })
// router.get('/', (req, res) => {
//     res.redirect("articles/new");
// })
router.post('/', async (req, res) => {
    // const article = new Article({
    //     title: req.body.title,
    //     description: req.body.description,
    //     markdown: req.body.markdown,
    // })
    console.log("req: ", req.body);
    // try {
    //     article = await article.save();
    //     res.redirect(`/articles/${article.id}`);
    // } catch (e) {
    //     res.render('articles/new', {article: article});
    // }
})

module.exports = router
