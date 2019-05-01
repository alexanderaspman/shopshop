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
          $(".cart_items_list").append(
            `
       <div class="product_image"><img class="imgimg"  alt=""><img src="${a["3"]}"></div>
							<div class="product_content">
								<div class="product_info d-flex flex-row align-items-start justify-content-start">
									<div>
										<div>
											<div class="product_name">${a["0"]}, ${a["1"]}<a href="cart.html"></a>	<div></div></div>
											
											
										</div>
									</div>
									<div class="ml-auto text-right">
										<div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
										<div class="product_price text-right"><p class="price">${a["2"]}</p></div>
									</div>
								</div>
								<div class="product_buttons">
									<div class="text-right d-flex flex-row align-items-start justify-content-start">
										<div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
											<div><div><img src="images/heart.png" class="svg" alt=""><div>+</div></div></div>
										</div>
										
										<div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
											<div><div><a href="cart.html"><img src="images/cart.png" class="svg" alt=""></a><div>+</div></div></div>
										</div>
									
								
									</div>
								</div>
							</div>
            
            `)
          
        }
      }
    
  }) //JSON
}); //ready
