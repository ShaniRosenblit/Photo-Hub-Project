const express = require('express')
const server = express();
const cors = require('cors')
const port = 5000;
const configRouter = require('./controllers/configRouter');
const photosRouter = require('./controllers/photosRouter');
const categoriesRouter = require('./controllers/catedoryRouter');

server.use(cors());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb', extended: true}));

server.use(categoriesRouter);
server.use(configRouter);
server.use(photosRouter);

server.listen(port, () => {
  console.log(`app listening on port ${port}!`)
});