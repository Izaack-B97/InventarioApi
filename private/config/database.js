const mongoose = require('mongoose');
const db_name = 'inventario_cerrajeria';

// Conectamos la base de datos
mongoose.connect(`mongodb://localhost:27017/${db_name}`,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(resp => {
        console.log('CONEXION EXISTOSA A MONGODB . . .');
    })
    .catch(err => {
        console.log('Error al conectarse a la base de datos: ' + err);
    });

module.exports = mongoose;