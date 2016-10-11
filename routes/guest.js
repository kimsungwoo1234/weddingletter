var express = require('express');
var Guest    = require('../models/guest');
var router = express.Router();


router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});

var _pageSize =4;

router.route('/')
    .get(function(req, res) {
        
        res.render('guest');        
    })

    .post(function(req, res) {
        
        var guest = new Guest();      // create a new instance of the Bear model
        guest.name = req.body.name;  // set the bears name (comes from the request)
        guest.content = req.body.content;  // set the bears name (comes from the request)
        guest.password = req.body.password;  // set the bears name (comes from the request)

        // save the bear and check for errors
        guest.save(function(err) {
            if (err)
                res.send(err);

            res.render('guest');
        });
        
    });
    

router.route('/:id')
    .get(function(req, res) {        
        var cnt = parseInt(req.params.id);
        
        Guest.find(function(err,guests){            
            if(err)  return res.status(500).send({error:'database failure'})

            Guest.count({}, function( err, count){
                var totalInfo = new Object();
                totalInfo.list = guests;
                totalInfo.count = count;

                if (cnt + _pageSize >= count){
                    totalInfo.more = false;
                }
                else{
                    totalInfo.more = true;
                }
                

                res.json(totalInfo);
            })
             
           
            
        }).skip(cnt).limit(_pageSize).sort({created_at:-1});
    })

    .delete(function(req, res) {

        var id = req.params.id;
        var password = req.body.password;
        console.log('password = ' + password);

        var query = Guest.findOne({
            _id:id,
            password:password,
        },(function (err, kitten) {
            if (err)
                res.send(err);

            if (kitten) {
                console.log(kitten);
                kitten.remove();
                
                return res.status(200).send()
            }

            return res.status(500).send({error:'비밀번호가 일치하지 않습니다. '})
        }));
    });
    

 
module.exports = router