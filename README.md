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
6. Sample Errors
7. Extra 

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
     url: 'https://cloud.vetacloud.com',
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
