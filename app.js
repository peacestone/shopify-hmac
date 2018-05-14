const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const crypto = require('crypto')
const SECRET = '6cac45cb5c1a8194bf1c7f322182e5f4b8478b27be111f35859f7010def429d1'

function verifyShopifyHook(req) {
    var digest = crypto.createHmac('SHA256', SECRET)
            .update(Buffer.from(req.body, 'utf8'))
            .digest('base64');
            
    
    return digest === req.headers['x-shopify-hmac-sha256'];
}


app.use(bodyParser.text({type: 'application/json'}))
app.post('/', (req, res) => {
    
    console.log(req.body)
    res.status(200)
    if(verifyShopifyHook(req)){
        console.log('cool')
    }
    else {
        console.log('bad')
    }
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// const PORT = 3000;
// const SECRET = '6cac45cb5c1a8194bf1c7f322182e5f4b8478b27be111f35859f7010def429d1';

// var http = require('http'),
//     crypto = require('crypto'),
//     server;

// function verifyShopifyHook(req) {
//     var digest = crypto.createHmac('SHA256', SECRET)
//             .update(new Buffer(req.body, 'utf8'))
//             .digest('base64');
    
//     return digest === req.headers['X-Shopify-Hmac-Sha256'];
// }

// function parseRequestBody(req, res) {
//     req.body = '';

//     req.on('data', function(chunk) {
//         req.body += chunk.toString('utf8');
//     });
//     req.on('end', function() {
//         handleRequest(req, res);
//     });
// }

// function handleRequest(req, res) {
//     if (verifyShopifyHook(req)) {
//         console.log('cool')
//         res.writeHead(200);
//         res.end('Verified webhook');
//     } else {
//         console.log('horible')
//         res.writeHead(401);
//         res.end('Unverified webhook');
//     }
// }

// server = http.createServer(parseRequestBody);

// server.listen(PORT, function(){
//     console.log("Server listening on: http://localhost:%s", PORT);
// });
