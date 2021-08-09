const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

// @description Root Route
// @method GET/
route.get("/", services.homeRoute);

// @description index Route
// @method GET/index.html
route.get("/index.html", services.index);

// @description create Route
// @method GET/create.html
route.get("/create.html", services.create);

// @description category Route
// @method GET/category.html
route.get("/category.html", services.category);

// @description add Route
// @method GET/add.html
route.get("/add.html", services.add);

// API LIST
route.post("/api/list", controller.createList);
route.get("/api/list", controller.findList);
route.put("/api/users/:id", controller.update);
route.delete("/api/list/:name", controller.deleteList);

// API CATEGORY
route.post("/api/category", controller.createCategory);
route.get("/api/categories", controller.findCategory);

// API ITEM
route.post("/api/items", controller.createItem);
route.get("/api/item", controller.findItem);
route.get("/api/items/bycategory/:category", controller.findItemsByCategory);
route.put("/api/items/:id", controller.updateItem);
route.delete("/api/items/:id", controller.deleteItem);

module.exports = route;
