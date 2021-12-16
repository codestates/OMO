const express = require('express');
const app = express();
const port = 4000;

const indexRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   console.log('이게모야')
//   res.send('Hello World!');
// });

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
