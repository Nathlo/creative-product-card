$(".colour-value span").click(function(){

// Toggle the active colour of product
    $(".colour-value span").removeClass("active");
    $(this).addClass("active");

// Change the background color according to active product's colour
    $("body").css("background", $(this).attr("data-color"));

// Change the price color according to active product's colour
    $(".price").css("color", $(this).attr("data-color"));
    
// Change the size color according to active product's colour
    $(".size-value .color").css("color", $(this).attr("data-color"));

// Change the size active color according to active product's colour
    $(".size-value .active").css("background", $(this).attr("data-color"));
    
// Change the product image/colour based on active product's colour 
    $(".image img").attr("src", $(this).attr("data-img"));
    
// Change background color of buttons based on active product's colour
    $(".wrapper .btns button").css({
        "background": $(this).attr("data-color"),
        "border-color": $(this).attr("data-color"),
    });

});