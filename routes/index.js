var express = require('express');
var router = express.Router();
var indexview  = require('../controllers/index')

/* This 2 packages are necessary */
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.get('/', multipartMiddleware, indexview.homepage)
router.post('/', multipartMiddleware, indexview.home)

// router.post('/', multipartMiddleware, indexview.deleteFile)
// router.post('/', multipartMiddleware, indexview.files)
// router.post('/', multipartMiddleware, indexview.demandImage)
// router.post('/', multipartMiddleware, indexview.demandVideo)

// router.post('/delete', multipartMiddleware, indexview.deleteFile)
// router.post('/files', multipartMiddleware, indexview.files)
// router.post('/demandImage', multipartMiddleware, indexview.demandImage)
// router.post('/demandVideo', multipartMiddleware, indexview.demandVideo)

module.exports = router;