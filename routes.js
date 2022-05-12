const controller = require('./controller');
const routes = require('express').Router();

routes.get('/words', controller.getAll);

routes.post('/words', controller.addWord);

routes.put('/words', controller.udpateWord);

routes.delete('/words/:word', controller.deleteWord);

module.exports = routes;
