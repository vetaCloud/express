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
