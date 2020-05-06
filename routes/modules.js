require('../private/config/database');


const express = require('express');
const router = express.Router();
const Automotriz = require('../private/models/automotriz');

// Todos los registros en automoviles
router.get('/automotrices', async (req, res) => {
    try {
        let result = await Automotriz.find().exec();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Creamos un registro en automotrices
router.post('/automotrices',async (req,res) => {
    // console.log('POST');
    
    try {
        let datos = {
            clave: req.body.clave,
            existencia: req.body.existencia,
            precio: req.body.precio,
            update_at: req.body.update_at
        };

        // console.log(datos)

        let automotriz = new Automotriz(datos);
        let result = await automotriz.save();

        res.send(result);

    } catch (error) {
        res.status(500).json(error);
    } 
});

router.get('/automotrices/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let result = await Automotriz.findById(id).exec();
        
        res.json(result)
    } catch (error) {
        res.status(500).json(error);
    }
})


router.put('/automotrices/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const { clave, existencia, precio } = req.body;
        let data = {
            clave,
            existencia,
            precio
        }
        let result = await Automotriz.updateOne({ _id: id }, { $set: data });        

        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.delete('/automotrices/:id',async (req, res) => {
    try {
        let id = req.params.id;
        let result = await Automotriz.deleteOne({_id: id}).exec();
        
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;