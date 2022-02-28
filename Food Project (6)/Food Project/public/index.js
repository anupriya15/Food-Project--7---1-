const http= require('http');
const fs   =   require('fs');
const hostname = '195.201.179.80.'
const port =3000;
const home=fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const services= fs.readFileSync('./services.html')



const server = http.createServer((req,res)=>{ 
console.log(req.url);
url=req.url;
res.statusCode = 200;
res.setHeader('Content-Type' , 'text/plain');
if (url=='/'){
res.end('home');

}
if (url='/about'){
res.end('about');

}
if (url=='/services'){
res.end('services');

}
if (url=='/contact'){
res.end('contact');

}
else{ 
res.end("<h1>404 not found</h1>");
}





});
  server.listen(port,hostname,()=>{
    console.log(`Server running at http://${'195.201.179.80.'}:${3000}/`);
});
