const model = require('../model/index');
const controller = {};

controller.detailProduct = async function (req, res) {
  try {
    let product = await model.product.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (product.length > 0) {
      res.json({
        status: 200,
        message: 'Get Detail Product',
        data: product,
      });
    } else {
      res.json({
        status: 200,
        message: 'Cannot Get Detail Product',
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.listProduct = async function (req, res) {
  try {
    let product = await model.product.findAll();
    if (product.length > 0) {
      res.json({
        status: 200,
        message: 'Get List Product',
        data: product,
      });
    } else {
      res.json({
        status: 200,
        message: 'Cannot Get List Product',
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.createProduct = async function (req, res) {
  try {
    let product = await model.product.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
    });
    res.json({
      status: 201,
      message: 'Create Data Product Success !',
      data: product,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.updateProduct = async function (req, res) {
  try {
    let product = await model.product.update(
      {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({
      status: 201,
      message: 'Update Data Product Success !',
      data: product,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};
controller.deleteProduct = async function (req, res) {
  try {
    let product = await model.product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      status: 200,
      message: 'Delete Data Product Success',
      data: product,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

module.exports = controller;
