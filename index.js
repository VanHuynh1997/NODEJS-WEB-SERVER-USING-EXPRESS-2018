var express = require('express');
var app = express();
var port = 3000;
app.get('/',function(request,respone){
    respone.send('Hello Van');
});
app.get('/users',function(request,respone){
    respone.send('My name Van');
});
app.listen(port,function(){
    console.log('Server listening on port' + port);
});