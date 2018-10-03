let details = require('../models/details')
let express = require('express');
let router = express.Router();


router.findDetails = (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    details.find(function(err, details) {
        if (err)
            res.send(err);
        res.send(JSON.stringify(details,null,5));
    });
}
module.exports = router;