const express = require('express');
const app = express();
app.use(express.static('./build'));
const port = process.env.PORT || 1234;
app.listen(1234);
console.log(`listening on port ${port}`);