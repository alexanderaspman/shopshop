$(function(){
    let totalSum = 0; 
    
    for (let i = 0; i < localStorage.length; i++) {
     let key = localStorage.key(i); //Key typ som objekt - med metoder och egenskaper
    
     let getKey = JSON.parse(window.localStorage.getItem(key)); 
     
     let sum = getKey["1"] * getKey["2"];
     totalSum += sum;
     
     if(key > 0){
        $(".cart_extra_total_list").append(
            `
        <li class="d-flex flex-row align-items-center justify-content-start">
												<div class="cart_extra_total_title" >Produkt</div><div class="cart_extra_total_value ml-auto" id="ap"></div><div class="cart_extra_total_value ml-auto" id="#produkt15">${getKey["0"]}  </div>
												<div class="cart_extra_total_value ml-auto" id="prod"> </div>
                                            </li>
                                            <li class="d-flex flex-row align-items-center justify-content-start">
												<div class="cart_extra_total_title" >Antal</div><div class="cart_extra_total_value ml-auto" id="ap"></div><div class="cart_extra_total_value ml-auto" id="#produkt15"> ${getKey["2"]}</div>
												<div class="cart_extra_total_value ml-auto" id="prod"> </div>
                                            </li>
                                           
            `)
    
        }
    
      }
    
      $(".cart_extra_total_list").append(
        `   <li class="d-flex flex-row align-items-center justify-content-start">
        <div class="cart_extra_total_title" >Total</div><div class="cart_extra_total_value ml-auto" id="ap"></div><div class="cart_extra_total_value ml-auto" id="#produkt15"></div>
        <div class="cart_extra_total_value ml-auto" id="fulltp">${totalSum}kr </div>
    </li>`)
  })

  $('input:submit')