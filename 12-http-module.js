const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    else if(req.url === '/about'){
        res.end('this is our short history')
    }
   else{
    res.end(` <h2>Opps!</h2>
        <p>the page that you are looking for seems not exiset</p>
        <a href='/'>go to home page</a>`)
   }
});
server.listen(5500)