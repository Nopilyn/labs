/*window.onscroll = function() {scrollfunction()};


function  scrollfunction(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20)
	{
		$(".navbar").css("background-color", "#fff");
		$(".navbar-brand").css("color","black");
		$("#sc .nav li a").css("color","black");
	} else {
		$(".navbar").css("background-color", "transparent");
		$(".navbar-brand").css("color","white");
		$("#sc .nav li a").css("color","white");
}
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}); */

(function ($) {


$(window).scroll(function() {
      if ($("#sc").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });

})(jQuery);