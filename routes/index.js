var express = require('express');
var router = express.Router();

/* This 2 packages are necessary */
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


///UPLOAD FILE
router.post('/', multipartMiddleware, function(req, res, next) {
  axios({
    headers: {'X_API_KEY': 'uewhrr7h348rtherjfb8rh4rber23r', 'X_ROUTE_NAME': "profile-picture"},
    method: 'post',
    url: 'https://cloud.vetacloud.com/',
    data: req.files
  }).then(function (response) {
    console.log(response.data)
    res.redirect('/')
  });
});


/////DELETE FILE
router.post('/', multipartMiddleware, function(req, res, next) {
  axios({
    headers: {'X_API_KEY': 'uewhrr7h348rtherjfb8rh4rber23r', 'X_ROUTE_NAME': "profile-picture", 'X_FILE_NAME': "IHNUBDUpl2facbgCu-BSp.png"},
    method: 'delete',
    url: 'https://cloud.vetacloud.com/',
  }).then(function (response) {
    console.log(response.data)
    res.redirect('/')
  });
});


/////GET FILES IN A ROUTE
router.post('/', multipartMiddleware, function(req, res, next) {
  axios({
    headers: {'X_API_KEY': 'uewhrr7h348rtherjfb8rh4rber23r', 'X_ROUTE_NAME': "profile-picture"},
    method: 'post',
    url: 'https://cloud.vetacloud.com/files',
  }).then(function (response) {
    console.log(response.data)
    res.redirect('/')
  });
});

/////UPLOAD FILE WITH A DEMAND!
router.post('/', multipartMiddleware, function(req, res, next) {
  axios({
    headers: {'X_API_KEY': 'uewhrr7h348rtherjfb8rh4rber23r', 'X_ROUTE_NAME': "profile-picture"},
    method: 'post',
    url: 'https://cloud.vetacloud.com/image/50/50/10',
    data: req.files
  }).then(function (response) {
    console.log(response.data)
    res.redirect('/')
  });
});

module.exports = router;