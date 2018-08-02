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

$(document).on("scroll", function () {
    /*calculates how far down page you are*/
    var pageTop = $(document).scrollTop()

    /*adds height of browser window to pageTop*/
    var pageBottom = pageTop + $(window).height()

    /*saves tags into variable*/
    var tags = $("section")
    
    /* loop to check if tag is in area to fade in*/
    for (var i = 0; i < tags.length; i++) {
        /*gets each item in the tags variable*/
        var tag = tags[i]
        /*if the tag is further up than the bottom of the window it will show it*/
        if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
        } else {
        $(tag).removeClass("visible")
        }
}
})

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.reveal', { duration: 450, delay: 2,});
