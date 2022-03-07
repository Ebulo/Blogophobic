const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express(); // create an instance of express

var mongoDB = 'mongodb://127.0.0.1/blog';

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error: '));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
// app.get('/articles/new', (req, res) => {
//     res.send("<h1>New Article</h1>");
// })

app.get('/', (req, res) => {
    const articles = [
        {
        id: 1,
        title: 'Article One',
        createdAt: new Date(),
        description: 'This is the first article'
        },
        {
        id: 2,
        title: 'Article Two',
        createdAt: new Date(),
        description: 'This is the Second article'
        },

    ]
    res.render('articles/index', {articles: articles});
})

app.use('/articles', articleRouter);

app.listen(5000); // listen on port 5000
