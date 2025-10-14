//console.log(process.argv);
let [, , method, resource]=process.argv;
method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == "GET" && resource.startsWith("products/")) {
 
  let id = resource.split("/")[1];
  id = parseInt(id);

  if (isNaN(id) || id <= 0) {
    console.log("No es un numero");
   
  }else {

  fetch("https://fakestoreapi.com/products/" + id) 
    .then((response) => response.json())
    .then((data) => console.log(data));
}
}
