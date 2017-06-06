const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const userRoutes = require('./routes/users_routes');
const app = express();
app.use(cors());
app.use(bodyParser.json());

userRoutes(app);

app.use('/', express.static('public'));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
