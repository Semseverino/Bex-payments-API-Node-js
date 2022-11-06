const express = require('express');
const axios = require('axios')
const http = require('http');
const request = require('request');
const postMerchant = require('../middlewares/postMerchant');
const getMerchant = require('../middlewares/getMerchant');
const updateMerchant = require('../middlewares/updateMerchant');

const router = express.Router();

router.post('/v1/merchants',
 postMerchant);

router.get('/v1/merchants/{merchant-id}', 
getMerchant);

router.update('/v1/merchants/{merchant-id}',
updateMerchant);


module.exports = router;