const models = require("../../models");
const orderListCollection = require("./db-collection-orderlist")(models);
const toppingListCollection = require("./db-collection-toppinglist")(models);

exports.orderListCollection = orderListCollection;
exports.toppingListCollection = toppingListCollection;