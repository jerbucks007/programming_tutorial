module.exports = (mongoose, connection) => {
  const schema = new mongoose.Schema({
    orderData: {},
    orderNumber: { type: Number },
    pizzaNumber: { type: Number },
    size: { type: String },
    crust: { type: String },
    type: { type: String },
    toppings : { type: Array },
    toppingsWhole: { type: Array },
    toppingsFirst: { type: Array },
    toppingsSecond: { type: Array },
    orderDate: { type: Date }
  });

  const model = connection.model('order_lists', schema);
  return model;
};