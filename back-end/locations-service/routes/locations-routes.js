const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

// import controller
const { listLocations, getLocation, deleteLocation, updateLocation, createLocation } = require('../controllers/locations-controller')

router.use((req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader !== 'undefined'){
        const [bearer, bearerToken] = bearerHeader.split(' ');

        jwt.verify(bearerToken, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                // err = {
                //   name: 'JsonWebTokenError',
                //   message: 'jwt malformed'
                // }
                res.json(err);
            }
            else{
                req.token = bearerToken;
                next();
            }
          });
    }
    else{
        res.sendStatus(401);
    }
});

router.route('/:id').get(getLocation).put(updateLocation).delete(deleteLocation);
router.route('/').post(createLocation).get(listLocations);

module.exports = router;