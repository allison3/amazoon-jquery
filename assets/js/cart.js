$(document).ready(function(){

  $.get('https://www.batchacademy.com/api/wdfne/dummy/amazoon-products', function(products){
    //IN HERE WE HAVE ACCESS TO THE DATA FROM THE SERVER

    var updateView = function(){
      var cart = $('.cart .product');
      var saved = $('.saved .product');

      if(cart.length === 0){
        $('.cart .empty').show();
        $('.cart-total').hide();
      } else {
        $('.cart .empty').hide();
        $('.cart-total').show();
      }

      if(saved.length === 0){
        $('.saved .empty').show();
      } else {
        $('.saved .empty').hide();
      }

      var cartTotal = 0;
      $(cart).each(function(){
        cartTotal += Number($(this).data('price'));
      });

      $('.cart-total span').text('$' + cartTotal.toFixed(2));

      updateView();

    }
    var productTemplate = $('template#product').html();

      for(var i = 0; i < products.length; i++){
        var newProduct = $(productTemplate);

        $('h2', newProduct).text(products[i].name);
        var newManufacturer = $('<span/>').addClass('manufacturer').text('by ' + products[i].manufacturer);
        $('h2', newProduct).append(newManufacturer);
        $('.image img', newProduct).attr('src', products[i].imageSrc);
        $('h3', newProduct).text(products[i].description);
        $('.price, .mobile-price', newProduct).text('$' + products[i].price.toFixed(2));
        $(newProduct).data('price', products[i].price);

        $('.cart').append(newProduct);
      }

      $('.move').on('click', function(){
        if ($(this).parents().eq(4).hasClass('cart')) {
        $('.saved').append($(this).parents().eq(3));
        $(this).text('Add to Cart');
      } else {
        $('.cart').append($(this).parents().eq(3));
        $(this).text('Save for Later');
      }

      updateView();

      });

      // function updateView() {
      //   var products = $('.products .product');
      //   var total = 0;
      //   $(products).each(function(){
      //   total += Number($(this).data('price'));
      // }
      // });
      //   console.log(total);

  

  });
  
//OUT HERE WE DONT HAVE ACCESS TO THE DATA

      
     });
  


