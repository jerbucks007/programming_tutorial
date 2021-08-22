export default (app) => {

    const middleware = {};

    const logger = (req, res, next) => {
        console.log(`This is the url requested: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
        console.log(`This is the params requested: ${JSON.stringify(req.params)}`);
        next();
    }

    middleware.logger = logger;

    return middleware;

}