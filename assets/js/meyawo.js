/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/*
 * Legacy smooth-scroll handler targets `.navbar .nav-link`, but the current
 * navigation uses `.custom-navbar .link`.
 */
// $(document).ready(function(){
//     $(".navbar .nav-link").on('click', function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 700, function(){
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

/*
 * Legacy portfolio "View More" handler; the portfolio no longer has an active
 * view-more control, and its projects are displayed together.
 */
// $(document).ready(function() {
//     $('#portfolio .row:gt(2)').hide();
//     $('#view-more-btn').click(function() {
//         $('#portfolio .row:gt(2)').toggle();
//         $('#portfolio .row').show();
//         $(this).hide();
//     });
// });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

// Languages I know slider
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);

    // Clone slides for infinite effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    // Reset animation to prevent jitter
    track.addEventListener('animationiteration', () => {
        track.style.animation = 'none';
        setTimeout(() => {
            track.style.animation = '';
        }, 10);
    });
});
