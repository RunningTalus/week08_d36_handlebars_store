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
  	console.log(item1);
  }


});