const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    // response.send('Hello Class');
    response.render('index', {name: 'Hamster', food: 'nuts'});
});

app.post('/', function(request, response) {
    const data = request.body;
    console.log(request.body);
    response.json({
        message: data
    });

});

app.get('/teams', function(request, response) {
    response.json ({
        name: 'My Team'
    });
})

app.listen(port, function(err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server is now running on PORT ${port}`);
});