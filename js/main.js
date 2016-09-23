// Main JS File Unminified 
$(function(){

  // Onload ----------------------------------------------------------
  // Load default shoe, saddle & laces - select in sidebar
  initShoeBuilder('1','black','cobalt','white');

  //ADDIN - Preload all images

/*


  // On Option Hover - Update?
  
  $('div[rel="change-option-color"]').hover(
  function() {
    //var colorName = $(this).attr('title');
    //console.log('hi:'+colorName);
  }, function() {
    //unhover
  }
);


*/


  // On Option Click - Update image & attrs for cart
  $('div[rel="change-option-color"]').click(function(event) {
    event.preventDefault();
    var optionType = $(this).parents('.color-options').attr('data-option-type'),
        optionColor = $(this).data('option-color'),
        shoeView = '1';
        //shoeView = $('#ShoeView').children('.selected').data('view');

    //console.log('optionType: '+optionType+'; optionColor:'+optionColor);
    updateShoeBuilder(shoeView,optionType,optionColor);

    //add in catch for when option doesnt exist
  });


  // Update Shoe Builder Function
  function updateShoeBuilder(shoeView,optionType,optionColor) {
    // Clear old selections
    $('#ShoePreview .'+optionType+'-photo').removeClass().addClass(optionType+'-photo');
    $('.'+optionType+'-meta span').removeClass();

    // Add New Selection Class to Photo
    $('#ShoePreview .'+optionType+'-photo').addClass(' '+optionColor);
    // Add Meta Data (need option name eventually)
    $('.'+optionType+'-meta span').text(optionColor).addClass(optionColor);


    //ADDIN - Update cart variables
    //ADDIN - Update color selction in sidebar
  }

  // Initialize Shoe Builder 
  function initShoeBuilder(shoeView,shoeColor,saddleColor,lacesColor) {
    updateShoeBuilder(shoeView,'shoe',shoeColor);
    updateShoeBuilder(shoeView,'saddle',saddleColor);
    updateShoeBuilder(shoeView,'laces',lacesColor);
  }

  // Update Shoe View 
  function updateShoeView(shoeView,shoeColor,saddleColor,lacesColor) {
    // get existing selections

    // clear out preview

    // add new view with correct styles selected
  }
  

});
