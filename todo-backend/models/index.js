const mongoose      = require('mongoose');
mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true });
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
    task: String
});

module.exports = mongoose.model('Todo', todoSchema);