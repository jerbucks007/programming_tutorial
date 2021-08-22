const xml2js = require("xml2js");
const schemaPml = require("../schemas/schema-pml");
const errorMod = require("../functions/function-error-mod");
const db = require("../db/main");

exports.read = async (data) =>{

    try{
        const InitialCheck = await new Promise(( res, rej ) => {
            xml2js.parseString(data, (err, result) => { if(err) rej(err); else res(result); });
        });
        return {error: "Invalid PML format"};
    }catch(err){}

    try{

        data = data.replace(/\\/g, "/");
        data = data.replace(/{/g, "<");
        data = data.replace(/}/g, ">");

        const jsonParse = await new Promise(( res, rej ) => {
            xml2js.parseString(data, (err, result) => {
                if(err){
                    rej(err);
                } else {
                    let json = JSON.stringify(result, null, 4);
                    json = json.replace(/\$/g, 'id');
                    json = JSON.parse(json);
                    res(json);
                }
            });
        });

        const validation = await schemaPml(jsonParse);
        if(validation.errors.length > 0){
            const errors = errorMod.modSchemaError(validation.errors);
            //return { error: errors.join(", ") };
            return {error: "Invalid PML format"};
        }

        // order List
        jsonParse.order.pizza.map( async (pizza, pizzaIdx) => {
            await db.orderListCollection.create(jsonParse, pizza);
        })

        return {orderData: jsonParse};

    } catch (err){

        //console.log(err.stack)
        return {error: "Invalid PML format"};
    }

    

}