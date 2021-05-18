const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Db connected! c:'))
  .catch(err => console.log(err));
