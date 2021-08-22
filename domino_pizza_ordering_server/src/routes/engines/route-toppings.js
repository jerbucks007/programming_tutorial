const db = require("../../db/main");

module.exports = (app) => {
    app.get('/api/toppings', async (req, res) => {
        const { page, limit } = req.query
        const record = await db.toppingListCollection.read(page, limit);
        res.send(record);
    });

    app.get('/api/toppings/total', async (req, res) => {
        const total = await db.toppingListCollection.readTotal();
        res.send({total});
    })
}