const db = require("../../db/main");

module.exports = (app) => {
    app.get('/api/orders', async (req, res) => {
        const record = await db.orderListCollection.read(req.query);
        res.send(record);
    });

    app.get('/api/orders/total', async (req, res) => {
        const total = await db.orderListCollection.readTotal();
        res.send({total});
    })

}