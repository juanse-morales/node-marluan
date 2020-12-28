const server = require('./server');
const mongoose = require('mongoose');

const { PORT, MONGO_URI } = require('./config');

mongoose.connect(MONGO_URI, {useNewUrlParser:true}).then(()=>{
  server.listen(PORT, ()=>{
    console.log(`CodingApp backend running on port ${PORT}`);
  });
}).catch(console.log);
