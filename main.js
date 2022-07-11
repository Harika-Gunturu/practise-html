/*let carts = document.querySelectorAll('.add-cart');
for(let i=0; i < carts.length; i++) {             

                                                            //console.log("my loop")=4

  carts[i].addEventListener('click', () => {  
                                                              //console.log("added  to cart")=how many times u click on add cart
    
          cartNumbers();                              
        })
      }
 

function cartNumbers() {                                                           function cartNumbers(){
                                                                                  localStorage.setItem('cartNumbers',1);/{check in console::applications}
  let productNumbers = localStorage.getItem('cartNumbers');
  console.log(productNumbers);
  console.log(typeof productNumbers);               //string
  productNumbers =parseInt(productNumbers);
  console.log( typeof productNumbers) ;                      //integer   
  localStorage.setItem('cartNumbers', 1);
} 

*/



//starting from here                                     

let carts = document.querySelectorAll('.add-cart');

let products = [
{
  name:'Grey Hoddie',                                       //[array and {objects
  tag:'greyhoddie',
  price:15,
 inCart:0 
},

{
    name:'Grey T-shirt',
    tag:'greyT-shirt',
    price:25,
    inCart:0
  },

  {
    name:'Black T-shirt',
    tag:'blackT-shirt',
    price:35,
   inCart:0
  },


  {
    name:'Black Hoddie',
    tag:'blackhoddie',
    price:20,
    inCart:0
  }
];
for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{          //wn we click added to cart
      cartNumbers(products[i]);                    //we are sending index of the product we get to cartNumbers function()      
      totalCost(products[i])                                        
    })
}
 function onLoadcartNumbers() {                                           
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
  } 

function cartNumbers(product) {            //cartnumbers function is expecting product as parameter
                                                                                 //console.log("The product clicked is", product)    {to know product details in console
    let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);           //converts to integer
  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;   //if already added1 next will be added to it
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;                   //if not it shows 1::cosole::application
  }

  setItems(product);     //we are sending product to setitem function()
  
}

function setItems(product) {                      //this is setitem function() we are setting product info by using setitems function()
  
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);    //json.parse will convert string to json objects
    if(cartItems != null) {            //cartitems is not equal to null
       if(cartItems[product.tag] == undefined)  {
        cartItems = {
          ...cartItems,
          [product.tag]: product
        }
       }
      cartItems[product.tag].inCart += 1;
    } else {

    
   product.inCart = 1;
    
   cartItems = {
    [product.tag]:product             //you are adding a new product in cartiems object if that item is not existed
   }
  }
   
  

     localStorage.setItem("productsInCart",JSON.stringify(cartItems));
    } 

  function totalCost(product) {                        //this is totalcost function we passed product as parameter
  //console.log("The product price is", product.price);     this to view product price in console
  let cartCost = localStorage.getItem('totalCost');          //cartCost variable stores totalCost from localstorage
console.log("My cartCost is", cartCost);                    
  console.log(typeof cartCost);                            //defines kind either string or integer
      if(cartCost !=null) {
        cartCost = parseInt(cartCost);                  //to convert string to integer
        localStorage.setItem("totalCost", cartCost +  product.price);           //it adds product price which is in array to cartCost whn cartCost!= null
       } else {
        localStorage.setItem("totalCost", product.price);               //if cartCost=null it gives prodcut price as it is
       }

}
   function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost'); 
  console.log(cartItems);
  if(cartItems && productContainer) {        
    productContainer.innerHTML = '';
   Object.values(cartItems).map(item => {         
    productContainer.innerHTML  +=  `
    <div class="product">
    <ion-icon name="close-circle-outline"></ion-icon>
      <img src="./images/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
        
       <div class="price">$${item.price},00</div>
        <div class="quantity">
        <ion-icon class="decrease"  name="arrow-dropleft-circle"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon> 
         </div>
        <div class="total">
        $${item.inCart  * item.price},00
        </div>
        `
      });
         productContainer.innerHTML += `


         <div class="basketTotalContainer">
         <h4 class="basketTotalTitle">
         Basket Total
         </h4>
         <h4 class="basketTotal">
         $${cartCost},00
         </h4>
         `;


     }
   }
      onLoadcartNumbers();
  displayCart();
      




