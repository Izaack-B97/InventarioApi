const mongoose = require('mongoose');

const connect = async () => {
    try {
        const db_name = 'inventario_cerrajeria';

        // Creamos la conexion
        const db = await mongoose.connect(`mongodb://localhost:27017/${db_name}`,  { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Conexion exitosa a mongodb');
        return db;
    } catch (err) {
        throw new Error(err);       
    }
};
    



module.exports = connect;