const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let automotrizSchema = new Schema({
    clave: { type: String },
    existencia: { type: Number },
    precio: { type: Number, default: 0 },
}, {
    timestamps: true
});

const Automotriz = mongoose.model('Automotriz', automotrizSchema);

module.exports = Automotriz;