function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      $( skills ).ready( prog );
       
    } else {
      reveals[i].classList.remove("active");
      
    }
  }
}


window.addEventListener("scroll", reveal);

// $(document).ready(function() {
//   $('.hero').css("opacity: 1"
//     )
// });

function fadeIn() {
  $('#hero').css('opacity', '1')
}
$( window ).on( "load", fadeIn );

function prog() {
  // Code to run when the document is ready.
  $('.progress .progress-bar').css("width",
    function() {
        return $(this).attr("aria-valuenow") + "%";
    }
  )
}
