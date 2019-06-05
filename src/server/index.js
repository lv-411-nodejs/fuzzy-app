const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json({limit: '2mb'}));

require('./app/routes/api')(app);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
