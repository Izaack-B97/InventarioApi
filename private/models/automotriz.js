const mongoose = require('../config/database');

let automotrizSchema = {
    clave: { type: String },
    existencia: { type: Number },
    precio: { type: Number, default: 0 },
    update_at: { type: Date } 
};

const Automotriz = mongoose.model('Automotriz', automotrizSchema);

module.exports = Automotriz;