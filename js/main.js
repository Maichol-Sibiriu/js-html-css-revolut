// javascript
$(document).ready( function() {

  // riferimenti js click
  var dropdownP = $(".dropdown-products > a");
  var dropdownF = $(".dropdown-firm > a");
  // riferimenti js dropdown
  var products = $(".dropdown-products .menu-products");
  var firm = $(".dropdown-firm .menu-firm");

  // evento click products
  dropdownP.click(function() {
    $(this).next(".menu-products").toggle();
    // blocco menu
    firm.not(products).hide();
  });
  // evento click firm
  dropdownF.click(function() {
    $(this).next(".menu-firm").toggle();
    // blocco menu
     products.not(firm).hide();
  });

});// fine documento
