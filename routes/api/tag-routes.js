const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({include:[{model:Product, through:ProductTag}]})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err =>{
    console.log(err)
    res.status(500).json(err)})
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {include:[{model:Product, through:ProductTag}]})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => {
    console.log(err)
    res.status(500).json(err)})
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
});
  // create a new tag


router.put('/:id', (req, res) => {
  Tag.update(req.body, {where:{id:req.params.id}})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
  // update a tag's name by its `id` value
});

// router.put('/:id', (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })

//     .then((product) => {
//       // find all associated tags from ProductTag
//       return ProductTag.findAll({ where: { product_id: req.params.id } });
//     })
//     .then((productTags) => {
//       // get list of current tag_ids
//       const productTagIds = productTags.map(({ tag_id }) => tag_id);
//       // create filtered list of new tag_ids
//       const newProductTags = req.body.tagIds
//         .filter((tag_id) => !productTagIds.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             product_id: req.params.id,
//             tag_id,
//           };
//         });
//       // figure out which ones to remove
//       const productTagsToRemove = productTags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });


router.delete('/:id', (req, res) => {
  Tag.destroy({where:{id:req.params.id}})
  .then(records =>{
    console.log(records)
    res.status(200).json(records)
  }).catch(err => res.status(500).json(err))
  // delete on tag by its `id` value
});

module.exports = router;


//update routes aren't working
