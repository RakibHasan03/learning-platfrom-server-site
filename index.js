const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const courses = require('./data/courses.json')

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/', (req, res) => {
    res.send(' Courses Api Running')
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})