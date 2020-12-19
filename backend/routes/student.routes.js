module.exports = app => {
 
const student = require('../controllers/student.controller.js');

var router = require('express').Router();

router.get('/:id',student.findOne);

router.get('/',student.findAll);

router.post('/',student.create);

router.put('/:id',student.update);

router.delete('/:id',student.delete);

router.delete('/',student.deleteAll);

app.use('/api/student',router);

}
