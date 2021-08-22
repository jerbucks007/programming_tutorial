module.exports = (models) => {

    const exports = {};

    exports.create = async () => {

    }

    exports.read = async (page, limit) => {
        const getList = models.orderToppings.find({});
        if(page)
            getList.skip(Number(limit) * (Number(page)-1));
        if(limit)
            getList.limit(Number(limit));
        
        return await getList.catch(err => console.log("ERROR selecting TOPPING_LISTS", err));
    }

    exports.update = async () => {

    }

    exports.delete = async () => {

    }

    exports.readTotal = async () => {
        return await models.orderToppings.countDocuments({}).catch(
            err => console.log("ERROR counting ORDERLIST", err)
        );
    }

    return exports;
}

