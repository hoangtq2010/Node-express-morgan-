const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();  //tuyen bo dishRouter la 1 bo dinh tuyen Express

dishRouter.use(bodyParser.json());

dishRouter.route('/')   //tuyen bo diem cuoi tai 1 vi tri duy nhat
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req, res, next) =>{
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) =>{
    res.end('Will add the dishes: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) =>{
    res.end('Deleting all the dishes!');
});

module.exports = dishRouter;