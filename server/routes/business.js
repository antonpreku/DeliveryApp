const router = require('express').Router()
const { Business, Products} = require('../db');
const { async } = require('validate.js');

router.post('/newAccount',async (req, res, next) => {
    try{
        const account = await Business.create( {
            businessName: req.body.data.name,       
            type: req.body.data.type,
            address: req.body.data.address,
            phone: req.body.data.phone,
            userId: req.body.userId
        });
        res.send(account)
    }catch(err){
        next(err)
    }
})

router.post('/newProduct', async (req, res, next) => {
    try{
        const data = await Products.create({
            productName: req.body.data.productName,
            price: req.body.data.price,
            businessId: req.body.businessId
        })
        res.send(data)
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const data = await Business.findByPk(req.params.id)
        res.send(data);
    }
    catch (err) {
        next(err)
    }
})

router.get('/allProducts/:id', async (req, res, next) => {
    try {
       const data = await Products.findAll({ 
        where: { businessId: req.params.id}
        })
       res.send(data);
    }
    catch (err) {
        next(err)
    }
})

module.exports = router
