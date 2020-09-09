const url = require('url');
const carModel = require("../model/carProduct.js");

const routes = (app)=>{
    app.get('/prodList',(req,res)=>{
       carModel.find({},(err,carsResult)=>{
           if(err) return handleError(err);
           var data = {status:0,result:carsResult}
           res.send(data);
       })
    });

    app.post('/prodList', (req, res) => {
        var thisId = req.body.id;
        var thisName = req.body.name;
        var this_ctime = new Date();
        var car_instance = new carModel({ id:thisId,name: thisName, ctime:this_ctime });
        // Save the new model instance, passing a callback
        carModel.create(car_instance,function (err) {
            if (err) return handleError(err);
            res.send({ status: 0 })
        });
    });

    app.delete('/prodList', (req, res) => {
        
        var thisId = req.query.id;
        var thisdata = {id:thisId}
        carModel.deleteOne(thisdata,(err)=>{
            if(err) return handlerError(err);
            res.send({status:0})
        })
    })

}

module.exports =  routes;