// Data base name: finlyDB, Password: @Twopiece.23 or @twopiece.23@


const express = require('express');
const morgan = require('morgan');


// require('dotenv').config();
// require('./libs/dbConnect'); // Connect to MongoDB
// const userRouter = require('./routes/user.route');

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

const path = require('path');
app.set('views', path.join(__dirname, 'views'));

// app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});


// app.use('/users', userRouter);



app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});



app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});