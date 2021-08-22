exports.modSchemaError = (schemaError) => {
    let errors = [];
    schemaError.map(err => {
        console.log(err.message, err);
        if(err.message.indexOf('dependency required') > -1 )
            errors.push("Toppings Required Custom Type")
        else if(err.message.indexOf('custom') > -1 ){
            // blank
        }
        else if(err.message.indexOf('meet maximum length of 12') > -1)
            errors.push("Toppings required maximum of 12 items");
        else if(err.message.indexOf('requires property "id"') > -1 && err.stack.indexOf('instance.order.pizza') > -1 && err.stack.indexOf('.toppings') > -1)
            errors.push("toppings requires property area");
        else if(err.message.indexOf('requires property "id"') > -1 && err.stack.indexOf('instance.order.pizza') > -1 )
            errors.push("pizza requires property number");
        else if(err.message.indexOf('requires property "id"') > -1 && err.stack.indexOf('instance.order') > -1)
            errors.push("Order requires property number");
        else
            errors.push(err.message);
    })
    return errors;
}