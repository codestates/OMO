const express = require('express');
const app = express();
const port = 4000;
const indexRoutes = require('./routes/index');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
