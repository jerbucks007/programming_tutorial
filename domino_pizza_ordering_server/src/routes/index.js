const Router = require("express").Router();
const engines = require('./engines');

module.exports = () => {
    try {
    
        engines.routeUpload(Router);
        engines.routeTextarea(Router);
        engines.routeOrders(Router);
        engines.routeToppings(Router);
        
        return Router;

    } catch (e) {
        console.log(`Route Error ${e.stack}`)
        return null;
    }
}

