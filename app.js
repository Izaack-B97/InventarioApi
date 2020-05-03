
const routerIndex = require('./routes/index');
const routerModules = require('./routes/modules');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.set('port', process.env.PORT || 3000);

// Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/', routerIndex);
app.use('/modulos', routerModules);

app.listen(app.get('port'), () => {
    console.log(`El servidor esta corriendo en el puerto ${app.get('port')}`);
});
