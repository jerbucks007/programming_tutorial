const functionPml = require("../../functions/function-pml");

module.exports = (app) => {
    app.post('/api/upload', async (req, res) => {
        if(req.files[0]){
            let ext = req.files[0].originalname.split(".")
            ext = ext[ext.length-1];
            //if(ext != "pml") return res.send({error: 'Invalid File'});
            const pmlObject = await functionPml.read((req.files[0].buffer).toString('utf8'));
            res.send(pmlObject);
        }else{
            res.send({error: 'No PML File Found'});
        }        
    });
}