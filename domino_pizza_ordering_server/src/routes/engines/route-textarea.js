const functionPml = require("../../functions/function-pml");

module.exports = (app) => {
    app.post('/api/textarea', async (req, res) => {
        if(req.body && req.body.textarea){
            const pmlObject = await functionPml.read(req.body.textarea);
            res.send(pmlObject);
        }else{
            res.send({error: 'No Value in the TextArea'});
        }
    });
}