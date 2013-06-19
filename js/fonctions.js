 /*-- FONCTIONS JAVASCRIPT  --*/

/* FONCTION SLIDER TOP */
$(function(){
        $('#slides').slides({
                preload: true,
                preloadImage: '../img/loading.gif',
                play: 5000,
                pause: 10000,
                hoverPause: true
        });
});

