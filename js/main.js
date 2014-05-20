$(document).on('ready', function() {
  
  // console.log($);
  // console.log(Handlebars);

  var productTemplate = $('#product-template');
  	// console.log(productTemplate);
	var templateText = productTemplate.html();
		// console.log(templateText);
	var template = Handlebars.compile(templateText);
		// console.log(template);
	
	for (var i=0; i<productsData.productsList.length; i++){
  	var item = productsData.productsList[i];
  	// console.log(item);
  	var item1 = template(item);
  	$('.new-products').append(item1);
  	// console.log(item1);
  }



  var wishlistTemplate = $('#wishlist-template');
  // console.log(wishlistTemplate);

  var wishlistText = wishlistTemplate.html();
  // console.log(wishlistText);

  var wishTemplateText = Handlebars.compile(wishlistText);

  $('.wishlist').on('click', function(){
    // console.log($(this));
    var listSection = $(this).closest('.product').find('.title').html();
    // console.log("This is listSection: " + listSection);
    var insertThis = wishTemplateText({title:listSection});
    // console.log("This is insertThis: " + insertThis);
    // console.log("This is Handlebars: " + Handlebars);
    $('#wishlist').append(insertThis);
  });

});