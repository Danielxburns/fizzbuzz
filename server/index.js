const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/../client/build'));

app.listen(8080, () => console.log('MyFizzbuzz listening on port 8080!'));
