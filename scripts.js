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
    $('span').fadeIn(3500);
    $('p').css('display', 'none');
    $('p').fadeIn(3000);
    });
