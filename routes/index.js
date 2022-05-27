var express = require('express');
var router = express.Router();
var fs = require('fs');

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
  console.log(req.files)
  try{
    axios({
      headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},
      method: 'post',
      url: 'http://localhost:3000/',
      data: req.files
    }).then(function (response) {
      if(response.status !== "error"){
        console.log(response.data)
        fs.unlinkSync(req.files.file.path)
      }
      else{
        console.log(response.data)
      }
      res.redirect('/')
    });
  }
  catch(error){}
});


// /////DELETE FILE
// router.post('/', multipartMiddleware, function(req, res, next) {
//   axios({
//     headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture", 'X_FILE_NAME': "IHNUBDUpl2facbgCu-BSp.png"},
//     method: 'delete',
//     url: 'https://cloud.vetacloud.com/',
//   }).then(function (response) {
//     if(response.status !== error){
//       console.log(response.data)
//       fs.unlinkSync(req.files.file.path)
//     }
//     else{
//       console.log(response.data)
//     }
//     res.redirect('/')
//   });
// });


// /////GET FILES IN A ROUTE
// router.post('/', multipartMiddleware, function(req, res, next) {
//   axios({
//     headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},
//     method: 'post',
//     url: 'https://cloud.vetacloud.com/files',
//   }).then(function (response) {
//     if(response.status !== error){
//       console.log(response.data)
//       fs.unlinkSync(req.files.file.path)
//     }
//     else{
//       console.log(response.data)
//     }
//     res.redirect('/')
//   });
// });

// /////UPLOAD FILE WITH A DEMAND! ----- IMAGE FILE
// router.post('/', multipartMiddleware, function(req, res, next) {
//   axios({
//     headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},
//     method: 'post',
//     url: 'https://cloud.vetacloud.com/image/50/50/10',
//     data: req.files
//   }).then(function (response) {
//     if(response.status !== error){
//       console.log(response.data)
//       fs.unlinkSync(req.files.file.path)
//     }
//     else{
//       console.log(response.data)
//     }
//     fs.unlinkSync(req.file.path)
//     res.redirect('/')
//   });
// });


// /////UPLOAD FILE WITH A DEMAND!  ---- VIDEO FILE
// router.post('/', multipartMiddleware, function(req, res, next) {
//   axios({
//     headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},
//     method: 'post',
//     url: 'https://cloud.vetacloud.com/image/50/50/10',
//     data: req.files
//   }).then(function (response) {
//     console.log(response.data)
//     fs.unlinkSync(req.files.file.path)
//     res.redirect('/')
//   });
// });

module.exports = router;