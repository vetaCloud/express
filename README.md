<p align="center">
<img src="https://beta-dashboard.vetacloud.com/assets/vC-png-2.a21a37aa.png"></img>
</p>

# vetaCloud v0.1 NodeJS Integration 

How to use

`npm i axios`
`npm i connect-multiparty`

router.js
```javascript
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.post('/', multipartMiddleware, indexview.home)
```
Use Multi-part as a middleware for the route where the file is posted to. This could alternatively be used in the controller also but its usage in route is recommended to eliminate codebase complexity

controller.js
```javascript
var axios = require('axios');
```
Axios is used to post the file to our server. HTTP would be integrated in subsequent versions

Your Private Key would be needed for the next process. You can get it [here](https://dashboard.vetacloud.com/api-key)

# vetaCloud features avalable in Node JS
1. Basic upload
2. Image upload with optimization in parameters
3. Video upload with optimization in parameters
4. Delete file 
5. Fetch all files in a route 
6. Webhook
7. Sample Errors
8. Extra 

<br>

# Basic upload

Your Private key can be found on your [dashboard](https://dashboard.vetacloud.com/api-key). Make sure you are sending your API KEY and Route Name in the request header. Before pushing to our server, the file is hidden on your server so ensure to keep `fs.unlinkSync(req.files.file.path)` so as to delete the file from your server.

```javascript
var express = require('express');
const fs = require('fs');

axios({
     maxContentLength: Infinity, maxBodyLength: Infinity, 
     headers: {'X_API_KEY': 'VTCD_PRIVATE_884b1fccfbd0882267636854bcddf1', 'X_ROUTE_NAME': "profile-picture"},
     method: 'post',
     url: 'https://cloud.vetacloud.com/node/',
     data: {
         file: req.files, raw: fs.readFileSync(req.files.file.path)
     }
   }).then(function (response) {
     fs.unlinkSync(req.files.file.path)
     if(response.status !== "error"){
       console.log(response.data)
     }
     else{
       console.log(response.data)
     }
   });
```
Note: The files that are uploaded via this endpoint are subject to the Route type, image optimization specified in the route and the video optimization specified 

# Image upload with optimization in parameters
Images that are uploaded via this endpoint do not regard the values specified for image optimization in the route although there could be file rejection if the file uploaded is not an image. The image formats we support at the moment include; .png .jpg .gif .jpeg .svg .webf 

```javascript
axios({
     headers: {'X_API_KEY': 'VTCD_PRIVATE_884b1fccfbd0882267636854bcddf1', 'X_ROUTE_NAME': "profile-picture"},
     method: 'post',
     url: 'https://cloud.vetacloud.com/node/image/50/50/10',
     data: {
           file: req.files, raw: fs.readFileSync(req.files.file.path)
           }
     }).then(function (response) {
     if(response.status !== "error"){
       console.log(response.data)
     }
     else{
       console.log(response.data)
     }
     fs.unlinkSync(req.files.file.path)
});
```
The first parameter is the height of the image. The second parameter is the length of the image. The third parameter is the quality of the image. To use the default detail of the image's height, length or quality, use 0. If you specify height, you must specify length and vise versa. 


# Video upload with optimization in parameters
Videos that are uploaded via this endpoint do not regard the values specified for video optimization in the route although there could be file rejection if the file uploaded is not a video. The image formats we support at the moment include; .mp4 .mov .wmv .avi .flv .mkv .webm .mpeg-2
```javascript
axios({
     maxContentLength: Infinity, maxBodyLength: Infinity,
     headers: {'X_API_KEY': 'VTCD_PRIVATE_884b1fccfbd0882267636854bcddf1', 'X_ROUTE_NAME': "profile-picture"},
     method: 'post',
     url: 'https://cloud.vetacloud.com/node/video/50/50/10',
     data: {
          file: req.files, raw: fs.readFileSync(req.files.file.path)
          }
     }).then(function (response) {
     if(response.status !== "error"){
      console.log(response.data)
     }
     else{
      console.log(response.data)
     }
     fs.unlinkSync(req.files.file.path)
});
  ```
The first parameter is the height of the video. The second parameter is the length of the video. The third parameter is the quality of the video. To use the default detail of the video's height, length or quality, use 0. If you specify height, you must specify length and vise versa. 

# Delete file

To delete a file, the name of the file is required.

```javascript
axios({
     headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture", 'X_FILE_NAME': "IHNUBDUpl2facbgCu-BSp.png"},
     method: 'delete',
     url: 'https://cloud.vetacloud.com/node/',
     }).then(function (response) {
     if(response.status !== error){
       console.log(response.data)
     }
     else{
       console.log(response.data)
     }
});
```

# Fetch all files in a route 
This would fetch all the files you have in a route alongside their details.
```javascript
   axios({
     headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},
     method: 'get',
     url: 'https://cloud.vetacloud.com/node/files',
   }).then(function (response) {
     if(response.status !== error){
       console.log(response.data)
     }
     else{
       console.log(response.data)
     }
   });
```

# Webhook
The webhook for every upload is in the response's data. 

### ```Successful file upload```
A successful file upload webhook is similar to this.
QR Route is generated for all users but the code is generated for only Advanced and Premium users. QR Route is the route of a QR Code which holds the link to the file. 

```javascript
 status:"success",
 message: "Successfully Uploaded",
 file:{
     name: "EU4ne4klGT5F32C4JU592d.mp4",
     mimetype: ".mp4",
     destination: `https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_2cd6793f8daa684155ceed6b2a9c01/demo-videos/EU4ne4klGT5F32C4JU592d.mp4`,
     size: 3.6899,
     qrroute: `https://cloud.vetacloud.com/qrCodes/w3c2d679312f8daa684155cetyed6b2a789c01.png`
 }
 ```
 The size is in Megabyte. We believe this simplifies accountability for users.
 
 
