module.exports = (mongoose, connection) => {
  const schema = new mongoose.Schema({
    toppingsName: { type: String },
    toppingsTotal: { type: Number },
    createdAt: { type: Date }
  });
  const model = connection.model('order_toppings', schema);
  return model;
};