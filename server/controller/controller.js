var listDB = require("../model/listModel");
var categoriesDB = require("../model/categoryModel");
var itemsDB = require("../model/itemModel");

// ------------LIST RELATED----------------
// add item to list
exports.createList = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new item
  const item = new listDB({
    name: req.body.name,
    category: req.body.category,
  });

  // save item in the list database
  item
    .save(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

// retrieve and return all items in list DB
exports.findList = (req, res) => {
  listDB
    .find()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while retriving user information.",
      });
    });
};

// update a new identified user by user id
exports.update = (req, res) => {};

// delete item from list based on name
exports.deleteList = (req, res) => {
  const name = req.params.name;

  listDB
    .findOneAndDelete(name)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete with name ${name}. Name may be incorrect.`,
        });
      } else {
        res.send({ message: "Item deleted from list successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete item " + query + " from list.",
      });
    });
};

// -------------CATEGORY RELATED---------------
// create and save new Category
exports.createCategory = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new category
  const category = new categoriesDB({
    name: req.body.name,
  });

  // save category in the database
  category
    .save(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

// retrieve and return all categories/ retrieve and return a single category
exports.findCategory = (req, res) => {
  categoriesDB
    .find()
    .then((category) => {
      res.send(category);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while retriving category information.",
      });
    });
};

// --------------ITEM RELATED--------------------
// create and save new Item
exports.createItem = (req, res) => {
  console.log("Received a POST request to add an item");
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new item
  const item = new itemsDB({
    category: req.body.category,
    name: req.body.name,
  });

  // save item in the database
  item
    .save(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

// retrieve and return all items
exports.findItem = (req, res) => {
  itemsDB
    .find()
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while retriving category information.",
      });
    });
};

// retrieve and return all items by category
exports.findItemsByCategory = (req, res) => {
  const category = req.params.category;
  const query = { category: category };

  itemsDB
    .find(query)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while retriving itemDDL information.",
      });
    });
};

// update a new identified item by item id
exports.updateItem = (req, res) => {};

// delete a item with specified item id in the request
exports.deleteItem = (req, res) => {};
