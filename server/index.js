const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../client/build'));

app.get('/', (req, res) => { 
    res.send(
      `Yeah, we're serving on up!`);
  });

app.listen(8080, () => console.log('MyFizzbuzz server listening on port 8080!'));
