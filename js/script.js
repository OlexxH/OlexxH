// $(document).ready(function () {
//    function reveal() {
//       var reveals = document.querySelectorAll('.reveal');

//       for (var i = 0; i < reveals.length; i++) {
//          var windowHeight = window.innerHeight;
//          var elementTop = reveals[i].getBoundingClientRect().top;
//          var elementVisible = 150;

//          if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active");
//          } else {
//             reveals[i].classList.remove("active");
//          }
//       }
//    }

//    window.addEventListener("scroll", reveal);
// });

// var modal = document.getElementById("login");

// // Get the button that opens the modal
// var btn = document.getElementById("btn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//    modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//    modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//    if (event.target == modal) {
//       modal.style.display = "none";
//    }
// }


$(document).ready(function () {
   $('.mobile__menuitem').click(function () {
      $(".checkbox").prop("checked", false);
   });

   $(".btn__popup").click(function () {
      $('.modal').css("display", "block");
   });

   $(".close").click(function () {
      $('.modal').css("display", "none");
   });
});