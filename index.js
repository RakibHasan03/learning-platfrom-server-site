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
app.get('/courses/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const selectCourse = courses.find(c=> c.id === id);
    res.send(selectCourse)

});
app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})