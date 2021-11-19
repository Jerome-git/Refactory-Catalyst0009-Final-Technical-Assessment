
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to the database!'))
  .catch((err) => console.log(err));

//routes prefix
app.use('/api/post', require('./routes/routes'));

//start server
app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
