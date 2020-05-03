const mongoose = require('../config/database')
const Schema = mongoose.Schema;

let automotrizSchema = {
    clave: { type: String },
    existencia: { type: Number },
    precio: { type: Number },
    update_at: { type: Date } 
};

let Automotriz = mongoose.model('Automotriz', automotrizSchema);

module.exports = Automotriz;