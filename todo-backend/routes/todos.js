const express = require('express');
const Router = express.Router();
const Todo = require('../models');

Router.route('/')
.get((req, res, next) => {
    Todo.find({})
        .then(todos => res.send(todos))
        .catch(err => next(err));
})
.post((req, res, next) =>{
    Todo.create(req.body)
        .then(todo => res.status(201).send(todo))
        .catch(err => next(err));
});

Router.route('/:id')
.delete((req, res, next) =>{
Todo.findByIdAndRemove(req.params.id)
.then(todo => res.send(todo))
.catch(err => next(err));
});
module.exports = Router;