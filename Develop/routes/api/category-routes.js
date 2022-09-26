const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:[Product]})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  Category.findOne({where:{id:req.params.id},include:[Product]})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  Category.update({where:{id:req.params.id}})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({where:{id:req.params.id}})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
  // delete a category by its `id` value
});

module.exports = router;
