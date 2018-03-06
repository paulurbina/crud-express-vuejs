const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, function (err, item) {
    res.json(item);
  })
});

//get data /item
router.get('', (req, res) => {
  Item.find(function (err, items) {
    if (err) { throw err; }
    else {
      res.json(items);
    }
  })
});

//add data - /item POST
router.post('/', (req, res) => {
  const item = new Item(req.body);
  item.save()
  .then( item => {
    res.status(200).json({item: 'Item agregado'});
  })
  .catch(err => {
    res.status(400).send({item: 'error al agregar el item'});
  })
});

//update data /item/:id
router.put('/:id', (req, res, next) => {
  Item.findById(req.params.id, function (err, item) {
    if (!item) {
      return next(new Error('no se puede cargar el documento'));
    }
    else {
      item.name = req.body.name;
      item.price = req.body.price;
      item.quantity = req.body.quantity;
      item.provider = req.body.provider;
      item.save()
      .then(item => {
        res.json('actualizacion completa');
      })
      .catch( err => {
        res.status(400).send('no se puede actualizar');
      });
    }
  })
});

//delete-remove 
router.delete('/:id', (req, res, next) => {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) { res.json(errr) }
    else {
      res.json('item eliminado satisfactoriamente');
    }
  })
});

module.exports = router;