(function() {

    // Validering för alla fält med class validation1 (Validerar att det är fler än 2 tecken och att de inte består enbart av siffror)
    $("#validat").keyup(function() {
        if ($(this).val().length <= 2 || $.isNumeric($(this).val())){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });
    $("#validat1").keyup(function() {
        if ($(this).val().length <= 2 || $.isNumeric($(this).val())){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });
    $("#validat2").keyup(function() {
        if ($(this).val().length <= 2 || $.isNumeric($(this).val())){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });

    // Validering för e-mail (validerar att @ finns med i inputen)
    $("#checkout_email").keyup(function(){
        if ($(this).val().indexOf("@") > -1){
            $(this).siblings(".invalid-feedback").hide();
        }
        else{
            $(this).siblings(".invalid-feedback").show();
        }
    })

    // Validerar att postkoden enbart innehåller siffror samt innehåller exakt 5 tecken
    $("#postnummer").keyup(function() {
        if (isNaN($(this).val()) || $(this).val().length < 5 || $(this).val().length > 5){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });
  })();
  function clicked(e)
{
    if(!confirm('Tack för din vaskning'))e.preventDefault();
}