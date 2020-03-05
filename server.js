const express = require('express');
const app = express();
const path = require('path');
const buildPath = path.join(__dirname, '.', 'build');
app.use(express.static(buildPath));
const port = process.env.PORT || 1234;
app.listen(port);
console.log(`listening on port ${port}`);