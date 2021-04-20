const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  const allCategories = await Category.findAll().catch((err) => {
    res.json(err);
  });
  // be sure to include its associated Products
  res.json(allCategories)
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  const categoryById = await Category.findByPk(req.params.id);
  // be sure to include its associated Products
  if (!categoryById) {
    res.status(404).json({ message: 'No category with this id!' });
    return;
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
