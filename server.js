const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/api/hello', (req, res) => {
    console.log('getting request')
  res.send({body: 'hey'});
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactBlogDB',  {
  useNewUrlParser: true,
});

app.use(require("./database/routesdb"))

app.listen(port, () => console.log(`Listening on port ${port}`));