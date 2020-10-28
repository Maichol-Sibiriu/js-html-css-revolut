// javascript
$(document).ready( function() {

  // riferimenti js click
  var dropdownP = $(".dropdown-products > a");
  var dropdownF = $(".dropdown-firm > a");
  // riferimenti js dropdown
  var products = $(".dropdown-products .menu-products");
  var firm = $(".dropdown-firm > menu-firm");

  // evento click
  dropdownP.click(function() {
    $(this).next(".menu-products").toggle();
  });

});// fine documento
