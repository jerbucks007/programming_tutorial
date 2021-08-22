module.exports = (models) => {

    const exports = {};

    exports.create = async ( jsonParse, pizza ) => {

        let whole = [], first = [], second = [];
        
        if(pizza.toppings)
            pizza.toppings.map((top, topIdx) => {
                if(top.id.area == "0") whole = top.item;
                if(top.id.area == "1") first = top.item;
                if(top.id.area == "2") second = top.item;
            })

        const orderlistSave = new models.orderLists({
            orderData: jsonParse,
            orderNumber: Number(jsonParse.order.id.number),
            pizzaNumber: Number(pizza.id.number),
            size: pizza.size[0],
            crust: pizza.crust[0],
            type: pizza.type[0],
            toppings: [...whole, ...first, ...second],
            toppingsWhole: whole,
            toppingsFirst: first,
            toppingsSecond: second,
            orderDate: new Date()
        })

        const orderResult = await orderlistSave.save().catch(err => {
            console.log('Error Saving Orders to Database', err);
            return {error: 'Error Saving Orders to Database'};
        })

        return orderResult;

    }

    exports.read = async (query) => {
        const { page, limit, search, toppings } = query;

        console.log('skip: '+Number(limit) * (Number(page)-1), 'limit: '+limit, 'toppings: '+toppings);

        let condition = {};
        if(search){
            condition = {
                $or: [
                    {
                        "size" : { "$regex": search, "$options": "i" }
                    },
                    {
                        "crust" : { "$regex": search, "$options": "i" }
                    },
                    {
                        "type" : { "$regex": search, "$options": "i" }
                    }
                ]
            }
        }

        if(toppings != "undefined" && toppings){
            condition = {
                "toppings": { $size: toppings }
            }
        }
        const getList = models.orderLists.find(condition);
        
        if(page)
            getList.skip(Number(limit) * (Number(page)-1));
        if(limit)
            getList.limit(Number(limit));

        const list = await getList.catch(err => console.log("ERROR selecting ORDER_LISTS", err));
        const total = await exports.readTotal(condition);
        return {list, total};
    }

    exports.update = async () => {

    }

    exports.delete = async () => {

    }

    exports.readTotal = async (condition) => {
        return await models.orderLists.countDocuments(condition).catch(
            err => console.log("ERROR counting ORDERLIST", err)
        );
    }

    return exports;
}