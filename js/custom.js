//$(function(){
//    $('.hamburger').click(function () {
//        $(this).toggleClass('is-active');
//        if ($(this).hasClass('is-active')) {
//            $('.m-menu').addClass('act');
//            $('html,body').css("overflow", "hidden");
//            // $('html,body').css("position", "fixed");
//        } else {
//            $('.m-menu').removeClass('act');
//            $('html,body').css("overflow", "");
//            // $('html,body').css("position", "static");
//        }
//    });
//
//    
//
//
//    
//
//
//
//});




$(function(){
    // Handle modal trigger clicks
    $('.modal-trigger').click(function() {
      // Get the content of the clicked modal-trigger's parent li
      var modalContent = $(this).closest('li').html();
  
      // Set the modal content
      $('.modal-content .modal_box').html(modalContent);
  
      // Show the modal
      $('#myModal').show();
    });
  
    // Handle modal close button click
    $('.close').click(function() {
      // Hide the modal
      $('#myModal').hide();
    });
  
    // Handle clicking outside the modal to close it
    $(window).click(function(event) {
      if (event.target.id === 'myModal') {
        $('#myModal').hide();
      }
    });
  });