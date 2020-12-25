const express = require('express');

const { PORT } = require('./config');
const { HomeRoutes, QuotesRoutes } = require('./routes');
const { NotFoundMiddleWare } = require('./middlewares');

const server = express();

server.use(express.static('./public'));
server.use(express.json());

server.use('/', HomeRoutes);
server.use('/', QuotesRoutes);
server.use(NotFoundMiddleWare);

server.listen(PORT, ()=>{
  console.log(`Application running on PORT ${PORT}`);
});