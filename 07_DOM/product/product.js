let product = {
  productId: "c001",
  productName: "GARMIN",
  productDesc: "FORERUNNER 245 AMP YELLOW",
  price: 11990,
  total: 25
} ;
product = {
    productId: "c002",
    productName: "DANIEL WELLINGTON",
    productDesc: "Classic Bayswater 40mm",
    price: 5710,
    total: 28
  } ;
  product = {
    productId: "c003",
    productName: "GARMIN",
    productDesc: "สมาร์ทวอทช์ รุ่น VENU SQ LIGHT สี LIGHT SAND ROSE GOLD",
    price: 8990,
    total: 18
  } ;
  product = {
    productId: "c004",
    productName: "VERSACE",
    productDesc: "นาฬิกาข้อมือ รุ่น VEDV00719 สี ดำ",
    price: 4400,
    total: 30
  } ;
  product = {
    productId: "c005",
    productName: "BABY-G",
    productDesc: "นาฬิกาข้อมือ รุ่น BGA-250-4A สีชมพู",
    price: 4200,
    total: 25
  } ;

//1. query div of products as reference node
const divProductsEle = document.querySelector("#products");
console.log(divProductsEle);

//2. create div of product element
// <div id="P001"></div>
const divProductEle = document.createElement("div");
divProductEle.setAttribute("id", product.productId);
console.log(divProductEle);

// 3. create p of product id element
// <p>Product Id: P001</p>
const pProductIdEle = document.createElement("p");
pProductIdEle.textContent = "Product Id: " + product.productId;

//4. add <p> product id to div of product
/* <div id="P001">  <p>Product Id: P001</p></div> */
divProductEle.appendChild(pProductIdEle);


console.log(divProductsEle);


