//console.log(process.argv);
const [, , method, resource]=process.argv;

if(method.toUpperCase() =="GET" && resource.toLowerCase()== "products"){
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(json=>console.log(json))
}