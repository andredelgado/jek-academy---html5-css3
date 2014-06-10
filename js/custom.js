$(document).ready(function() {
   $(function(){
        $(".headerTextText").typed({
            strings: ["Hi!", "I love web dev.", "I craft backends.", "I'm a hiker.", "My name is André!"],
            typeSpeed: 30, // typing speed
            backDelay: 500, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){
                $( ".teste" ).fadeIn( "slow", function() {
    // Animation complete
  });
            } // call function after typing is done
        });
    });

    var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
        ,fadeUntil=220 // 200px scroll or more will equiv to 0 opacity
        ,fading = $('.headerTextText')
    ;

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
    });
});