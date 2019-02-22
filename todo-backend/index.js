const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const cors          = require('cors');
const morgan        = require('morgan');
const PORT          = process.env.PORT || 3001;
const todoRoutes    = require('./routes/todos');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/todos', todoRoutes);
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        message:    err.message,
        error:      err
    });
});

app.listen(PORT, process.env.IP, () => `Server is now listening on PORT ${PORT}`);