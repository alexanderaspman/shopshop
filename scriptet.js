$(function () {
  //Hämtar alla produkter från JSON-filen och visar dessa på sidan genom att använda varje produkts ID.
  $.getJSON("products.json", function (response) {
    let quantity;
    $.each(response, function (i, prod) {
      $("#" + prod.id + " .imgimg").attr("src", prod.image);
      $("#" + prod.id + " .product_name").text(prod.name)
      $("#" + prod.id + " .description").text(prod.description)
      $("#" + prod.id + " .price").text(prod.price + "kr")
      $("#" + prod.id + " .quantity").change(function () {
        quantity = $("#" + prod.id + " .quantity").val()
      });

      //sparar info om vald produkter i localStorage
      $("#" + prod.id + " .svg").click(function () {
        let cart = [prod.name, prod.price,quantity, prod.id, prod.image]
        localStorage.setItem(prod.id, JSON.stringify(cart));
        
      });
      
    }) //each
    
        //Visar en förhandsgranskning av kassan i övre högra hörnet. 
        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          let a = JSON.parse(window.localStorage.getItem(key));
        
        if (key > 0) {
       
            
          
        }
      }
    
  }) //JSON
}); //ready
