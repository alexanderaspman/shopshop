$(function () {

  let totalSum = 0;

  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    let getKey = JSON.parse(window.localStorage.getItem(key));
    let sum = getKey["1"] * getKey["2"];
    
    totalSum += sum;

    if (key > 0) {
      $(".cart_items_list").append(
        `
        <li class="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
        <div class="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
            <div>
                <div class="product_number" >${getKey["2"]}</div>
            </div>
            <div>
                <div class="product_image"><img id="bild"src="${getKey["4"]}"></div>
            </div>
            <div class="product_name_container">
                <div class="product_name" id="kopkop"><a href="product.html" id="kopkopkop">You only picked one buy more</a></div>
                <div class="product_text" id="kopa">Second line for additional info</div>
            </div>
        </div>
        <div class="product_color product_text" ><span >Produkt </span><p id="text">${getKey["0"]}</p></div>
        <div class="product_size product_text">  <p id="price" >${getKey["1"]}</p></div>
        <div class="product_price product_text"><span> </span>
            <span>pris </span>kr
        </div>
        <div class="product_quantity_container">
            <input type="number" name=""  data="${getKey["3"]}" value="${getKey["2"]}" min="0" class="quantity">
        </div>
        <div></div> 
        <div class="product_total product_text"><span></span>
            <p id="total">${sum} </p></div>
            <div class="ta-bort" data="${getKey["3"]}">X</div>
    </li>
        `)

    }

  }

  $("#total6").append(
    `${totalSum}`)


  // Remove-funktion för li-items i varukorgen
  $('.ta-bort').on("click", function () {
    $(this).parents('li').remove();
    let getKey3 = $(this).attr("data");
    localStorage.removeItem(getKey3);
  });

$('#price').text( function(){
let prodo = $(this).siblings('.product_number').text();
if(prodo >= 3)
$('#kopkopkop').text("Nu börjar du likna någon");
$("#kopa").text('Men du kan bättre');
})


//Sparar nytt antal i localStorage
  $('.quantity').on("change", function () {
    let getKey3 = $(this).attr("data");
    let name = $(this).siblings("#text").text();
    let number = Number($(this).siblings("#price").text());
    let price = Number($(this).siblings(".product_number").text());
    let img = $(this).siblings("#bild");
    let lSUpdate = [name, number, img,price, getKey3];

    localStorage.setItem(getKey3, JSON.stringify(lSUpdate));
  
  });




  // Clear-funktion för varukorg och localstorage
  $("#clear-cart").click(function () {
    $(".cart_items_list").children('li').remove();
    localStorage.clear();
  })
   

     
  
      //     jQuery.each( function( i, pris ) {
      //   $( "#totalt" + i ).append( document.createTextNode(  + pris ) );
  
});//ready'

