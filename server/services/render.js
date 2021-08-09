exports.homeRoute = (req, res) => {
  res.render("index.html");
};

exports.index = (req, res) => {
  res.render("index.html");
};

exports.create = (req, res) => {
  res.render("create.html");
};

exports.category = (req, res) => {
  res.render("category.html");
};

exports.add = (req, res) => {
  res.render("add.html");
};
