'use strict';

//function togglePlayPause() {
	 // Grab a handle to the audio

//	var audio = document.getElementById('audioelement');
//    var playpause = document.getElementById('playpause');


//    document.createElement("audio");
//
//    audio.addEventListener("canplaythrough", function() {
//        audio.play();
//        }
//    );
//
///*var ss = document.createElement('audio');
//audio.appendChild(ss);
//*/
//
//
//
//    if (audio.paused || audio.ended) {
//    	playpause.className = 'volume-off';
//  /*      var sound = new Audio();
//  var sound = new Audio("/audio/cxlykter.mp3");
//   sound.play();
//        */
//        audio.play();
//    } else {
//    	playpause.className = 'volume';
//        audio.pause();
//    }
//}


var currentPosition = 0;
var slide1Top = $("#slide1").offset().top;
var slide2Top = $("#slide2").offset().top;
/*var slide3Top = $("#slide3").offset().top;*/
var slide4Top = $("#slide4").offset().top;
/*var slide5Bottom = document.body.offsetHeight;*/

function stopScrolling() {
     skrollr.get().stopAnimateTo();
}

function toggleScrollPause() {
    var s = skrollr.get();
    s.animateTo(document.body.offsetHeight, { duration: 20000}, {interruptible: true});
/*    
    if(currentPosition >= slide1Top && currentPosition < slide2Top) {
        s.animateTo(slide2Top, { duration: 8000}, {interruptible: true});
        $("#dot2").addClass('active');
    } else if(currentPosition >= slide2Top && currentPosition < slide3Top) {
        $('html, body').animate({
            scrollTop: slide3Top
        }, 5000);
        $("#dot3").addClass('active');
    } else if(currentPosition >= slide2Top && currentPosition < slide4Top) {
        s.animateTo(slide4Top, { duration: 8000}, {interruptible: true});
        $("#dot4").addClass('active');
    } else if(currentPosition >= slide4Top && currentPosition < document.body.offsetHeight) {
         s.animateTo(document.body.offsetHeight, { duration: 20000}, {interruptible: true});
        $("#dot5").addClass('active');
    }*/

 /*   var currentActive = document.getElementsByClassName('active');
    var id = currentActive[0].id;

    document.getElementById(id).className = 'dot';

    if(id === 'dot1') {
        $('html, body').animate({
            scrollTop: $("#slide2").offset().top
        }, 5000);
        $("#dot2").addClass('active');
    } else if(id === 'dot2') {
        $('html, body').animate({
            scrollTop: $("#slide3").offset().top
        }, 5000);
        $("#dot3").addClass('active');
    } else if(id === 'dot3') {
        $('html, body').animate({
            scrollTop: $("#slide4").offset().top
        }, 5000);
        $("#dot4").addClass('active');
    } else if(id === 'dot4') {
        $('html, body').animate({
            scrollTop: $("#slide5").offset().top
        }, 8000);
        $("#dot5").addClass('active');
    } else if(id === 'dot5') {
        $('html, body').animate({
            scrollTop: document.body.offsetHeight
        }, 5000);
    }*/
}


/*function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
}*/


(function(window, skrollr){

var s = skrollr.init({
    easing: {
    	x : function(p) {
            var s = p;
    		return s;
    	},
    	y : function(p){

            var stopSin = 0.70;
            var c;
            if(stopSin <= p) {
                c = 1;
            } else {
                c = Math.sin(2*p);

            }
    		return c;
    	}
    },
    smoothScrolling: true,
    render: function(data) {
        currentPosition = data.curTop;
    },
    mobileDeceleration:0.7
    });



window.onload = function(){
        function resize() {
            var viewportWidth = $(window).width();
            var viewportHeight = $(window).height();

            if(viewportWidth < viewportHeight) {
                $('#lykt').css({'background-position': 5 + 'em'});
                $('#lykt-opplyst').css({'background-position': 5 + 'em'});

            }

            $('#slides').css({width: $('#slide4').height() * 3.55 + 'px'});
            $('#slide4verscontainer').css({width: $('#slide4').height() * 3.55 + 'px'});


            $('.frost-upper').css({width: $('.frost-upper').height()});
            $('.frost-downer').css({width: $('.frost-downer').height()});


            var padding = ($(window).height() / 300);
            if(padding > 2) {
                padding = 2;
            }
            var paddingBottom = padding * 1.5;
            $('p.vers').css({'font-size': ($(window).height() / 40) + 'px', 'padding': padding + 'em', 'padding-bottom': paddingBottom + 'em'});
            $('p.vers span.center-image').parent().css({'font-size': ($(window).height() / 40) + 'px', 'padding': padding + 'em', 'padding-bottom': paddingBottom / 2 + 'em'});

            var slide4Width = $('#slide4').width();


            var refreng2 = $('#refreng2'),
                refreng2StartScroll = 470,
                refreng2Slutt = 490;

            refreng2.attr('data-'+refreng2StartScroll +'p', 'opacity:0');
            refreng2.attr('data-'+refreng2Slutt +'p', 'opacity:1' );



            var vers3 = $('#vers3'),
	            vers3StartScroll = 530,
	            vers3SluttScroll = 550;
            vers3.attr('data-'+vers3StartScroll +'p', 'opacity:0');
            vers3.attr('data-'+vers3SluttScroll +'p', 'opacity:1');


            /*Posisjoner akebilde*/
            var akeBilde = $('#akeBilde'),
                akeStartScroll = 430, //xl
                akeSluttScroll = 500, //l
                akeStartLeft = 6, //m
                akeStartTop = 20,
                akeSluttLeft = 45,
                akeSluttTop = 70;



            if(viewportWidth < 300) {
                akeStartLeft = 3;
                akeStartScroll = 450, //xl
                akeSluttScroll = 500; //l

            } else if(viewportWidth > 300 && viewportWidth < 800) {
                akeStartLeft = 6; //m
                akeStartScroll = 450, //xl
                akeSluttScroll = 500; //l

            } else {
                akeStartLeft = 10; //xl
                akeSluttScroll = 500; //xl

            }
            akeBilde.css({width: slide4Width/25});

            if(akeBilde.attr('data-akeStartScroll'))
            {
                akeBilde.removeAttr('data-' + akeBilde.attr('data-akeStartScroll') + 'p');
            }

            akeBilde.attr('data-'+ akeStartScroll +'p', 'left[x]:'+akeStartLeft+'%;top[y]:'+akeStartTop+'%');
            akeBilde.attr('data-akeStartScroll', akeStartScroll);

            if(akeBilde.attr('data-akeSluttScroll'))
            {
                akeBilde.removeAttr('data-' + akeBilde.attr('data-akeSluttScroll') + 'p');
            }
            akeBilde.attr('data-'+ akeSluttScroll +'p', 'left[x]:'+akeSluttLeft+'%;top[y]:'+ akeSluttTop+'%');
            akeBilde.attr('data-akeSluttScroll', akeSluttScroll);

            // akeBilde.attr('data-'+ (akeSluttScroll +50) +'p', 'left[x]:'+(akeSluttLeft+5)+'%;top[y]:'+ (akeSluttTop)+'%');



            //Løser at den ikke scroller forbi slottet på små skjermer
            var imageWidth = $('#slides').width();

            var percentage = 100 - ((viewportWidth / imageWidth) * 100);
            var diff = 0;
            var pmax = 68;
            if(percentage > pmax)
            {
                diff = percentage - pmax;
                percentage = pmax;
            }
            $('#slides').attr('data-550p', 'transform:translate(-' + percentage + '%,-66.66%);');

            //Hører til det over, sørger for at siste slide blir posisjonert riktig også.
            var transform = 'translate(' + (imageWidth - (imageWidth * (diff/100)) - viewportWidth) + 'px, 200%)';
            $('#slide5').css({'transform': transform, '-moz-transform': transform, '-webkit-transform': transform});

            var pp = viewportHeight / 1200;
            var baseSize = 26;
            var fontSize = (pp * baseSize) + 'px';
            $('.intro-textbox').css({'font-size': fontSize});

            $('.scrollText').animate({ fontSize: "1.2em" }, 10000);

            var highest;
            $.each($('.intro-textbox'), function (index, element) {
                if (!highest || $(element).height() > highest.height()) {
                    highest = $(element);
                }

            });

            while (highest.height() > highest.closest('.intro-textbox-container').height() * 0.8) {
                baseSize = baseSize - 1;
                fontSize = (pp * baseSize) + 'px';
                $('.intro-textbox').css({'font-size': fontSize});
            }

            skrollr.get().refresh();

        }
        resize();
        $(window).resize(function () {
            resize();
        });

   function getReceipientFromUrl() {
        var l = location ? location : (window.location ? window.location : document.location);

        var query = l.hash ? l.hash.substr(1):(l.search?l.search.substr(1):'');

       var indexLng = query.indexOf('=');

       if(indexLng !== -1) {
           var receipient = query.substring((indexLng + 4));
           return decodeURIComponent(receipient);
       } else {
           return decodeURIComponent(query);
       }
    }

   function setReceipient(receipient) {
    var lang = i18n.lng();

    var norsk = (lang==='no'||lang==='nb-NO'||lang==='nn-NO'||lang==='nb'||lang==='nn')?true:false;

   	$('.to').text(receipient || getReceipientFromUrl() ||(norsk?'Deg':'You'));

   }

	setReceipient();

    function setLanguage() {
        var l = location ? location : (window.location ? window.location : document.location);
        var query = l.hash ? l.hash.substr(1):(l.search?l.search.substr(1):'');
        //hvis det er language på
        var indexLng = query.indexOf('=');
        var lng = query.substring((indexLng + 1), (indexLng + 3));

        if(indexLng !== -1) {
            i18n.setLng(lng, function(t) {});

        } else {
            i18n.setLng('no', function(t) {});
        }

    }
    setLanguage();

    function generateSnow(backgroundId, canvasId) {
        var canvas = document.getElementById(canvasId);
//        var snowBackground = document.getElementById(backgroundId);
        var ctx = canvas.getContext('2d');

        var width = window.innerWidth;//510; //window.innerWidth;
        var height = window.innerHeight;//550; //window.innerHeight;
        canvas.width = width;
        canvas.height = height;

	var maxPixels = 25;
        var particles = [];
        for(var i = 0 ; i < maxPixels; i++)
        // particles.forEach(function()
        {
            particles.push({
                x: Math.random()*width,
                y: Math.random()*height,
			    r: Math.random()*4+1,
                d: Math.random()*maxPixels
            });
        }

        function draw() {
            ctx.clearRect(0,0,width,height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            for(var i = 0; i < maxPixels; i++){
                var p = particles[i];
                ctx.moveTo(p.x,p.y);
                ctx.arc(p.x,p.y, p.r, 0, Math.PI*2, true);
            }
                ctx.fill();
                update();

        }

        //Function to move the snowflakes
        //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
        var angle = 0;
        function update()
        {

            angle += 0.01;
            for(var i = 0; i < maxPixels; i++)
            {
                var p = particles[i];
                //Updating X and Y coordinates
                //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                //Every particle has its own density which can be used to make the downward movement different for each flake
                //Lets make it more random by adding in the radius
                p.y += Math.cos(angle+p.d) + 1 + p.r/2;
                p.x += Math.sin(angle) * 2;

                //Sending flakes back from the top when it exits
                //Lets make it a bit more organic and let flakes enter from the left and right also.
                if(p.x > width+5 || p.x < -5 || p.y > height)
                {
                    if(i%3 > 0) //66.67% of the flakes
                    {
                        particles[i] = {x: Math.random()*width, y: -10, r: p.r, d: p.d};
                    }
                    else
                    {
                        //If the flake is exitting from the right
                        if(Math.sin(angle) > 0)
                        {
                            //Enter from the left
                            particles[i] = {x: -2, y: Math.random()*height, r: p.r, d: p.d};
                        }
                        else
                        {
                            //Enter from the right
                            particles[i] = {x: width+2, y: Math.random()*height, r: p.r, d: p.d};
                        }
                    }
                }
            }
        }

        //animation loop
        setInterval(draw, 33);
    }
        generateSnow('snowBackground1', 'snowWindow1');
        generateSnow('snowBackground2', 'snowWindow2');

    $('body').animate({scrollTop: ($(document).height() * 0.025)}, 3000);
    };

   /* function autoplay() {
        if(s.getScrollTop() === 0 ) {
            s.animateTo(document.body.offsetHeight, { duration: 80000}, {interruptible: true});
        }
    }
    setTimeout(autoplay, 1000);*/
}(window, skrollr));



i18n.init({ detectLngQS: 'lang', useCookie : false }, function(t) {
    $(".slide").i18n();

});

//setup audio behaviour
(function() {
    var audio = document.getElementById('audioelement');
    var playpause = document.getElementById('playpause');
    var playing = false;

   // Check for audio element support.
    if (!(audio.canPlayType('audio/mp3') || audio.canPlayType('audio/mpeg') || audio.canPlayType('audio/ogg') || audio.canPlayType('audio/flac'))) {
        document.getElementsByClassName('volume-container')[0].hidden = "true";
    }

    playpause.addEventListener('click', function(){
        if(audio){
            if(audio.paused === true) {
                $('#audioelement').attr('autoplay');
                playpause.className = 'volume';
                playing = true;
            } else {
                playing = false;
                playpause.className = 'volume-off';
                audio.pause();
            }
        }
    });
    var hidden = 'hidden';

    function onchange (evt) {
        if(this !== undefined) {
            if(this[hidden]){
                playpause.className = 'volume-off';
                audio.pause();
            } else if(playing) {
                playpause.className = 'volume';
                audio.play();
            }
        }
    }

    // Standards:
    if (hidden in document){
        document.addEventListener("visibilitychange", onchange);
    }
    else if ((hidden = "mozHidden") in document) {
        document.addEventListener("mozvisibilitychange", onchange);
    }
    else if ((hidden = "webkitHidden") in document){
        document.addEventListener("webkitvisibilitychange", onchange);
    }
    else if ((hidden = "msHidden") in document) {
        document.addEventListener("msvisibilitychange", onchange);
    }
    // IE 9 and lower:
    else if ("onfocusin" in document){
        document.onfocusin = document.onfocusout = onchange;
    }
    // All others:
    else {
        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;
    }



    // set the initial state (but only if browser supports the Page Visibility API)
    if( document[hidden] !== undefined ) {
        onchange({type: document[hidden] ? "blur" : "focus"});
    }
})();
