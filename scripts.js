window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = ''; 
    else nav.className  = 'scroll';
};


$(document).ready(function(){

    /*! Fades in page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('span').css('display', 'none');
    $('span').fadeIn(2000);
    $('a').css('display', 'none');
    $('a').fadeIn(2000);

    });

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.reveal', { duration: 500, delay: 2,});
