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

function stopScrolling() {
     skrollr.get().stopAnimateTo();
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
//            console.log('sin: ' + s);
    		return s;
    	},
    	y : function(p){

            var stopSin = 0.70;
            var c;
            if(stopSin <= p) {
                c = 1;
               // c= 0.99;
//                console.log('cos****: ' + c);
            } else {
                c = Math.sin(2*p);

            }
//            console.log('cos: ' + c);
    		return c;
    	}
    },
    smoothScrolling: true,
    mobileDeceleration:0.7
    });



window.onload = function(){
        function resize() {
            var viewportWidth = $(window).width();

            $('#slides').css({width: $('#slide4').height() * 3.55 + 'px'});
            $('#slide4verscontainer').css({width: $('#slide4').height() * 3.55 + 'px'});

            $('p.vers').css({'font-size': ($(window).height() / 40) + 'px', 'padding': ($(window).height() / 300) + 'em'});

            var slide4Width = $('#slide4').width();

            var vers2 = $('#vers2'),
	            vers2StartScroll = 355,
	            vers2SluttScroll = 395,
	            vers2StartLeft = 4,
	            vers2SluttLeft = 35,
	            vers2StartTop = 0,
	            vers2SluttTop = 0;
	        var refreng2 = $('#refreng2'),
	        	refreng2StartScroll = 395,
	            refreng2SluttScroll = 410,
	            refreng2StartLeft = 35,
	            refreng2SluttLeft = 55;
	        var vers3 = $('#vers3'),
	            vers3StartScroll = 410,
	            vers3SluttScroll = 420,
	            vers3StartLeft = 60,
	            vers3SluttLeft = 70;


            /*Posisjoner akebilde*/
            var akeBilde = $('#akeBilde'),
                akeStartScroll = 300, //xl
                akeSluttScroll = 320, //l
                akeStartLeft = 6, //m
                akeStartTop = 20,
                akeSluttLeft = 45,
                akeSluttTop = 70;



            if(viewportWidth < 300) {
                akeStartLeft = 3;
                akeSluttScroll = 395;

	            vers2StartScroll = 350;
				vers2SluttScroll = 380; //390
                vers2StartLeft = 1;
                vers2SluttLeft = 30; //37

                refreng2StartScroll = 380;
	            refreng2SluttScroll = 410;
	            refreng2StartLeft = 23;//28;
	            refreng2SluttLeft = 35;

    	       	vers3StartScroll = 410;
	            vers3SluttScroll = 430;
	            vers3StartLeft = 20;//53;
	            vers3SluttLeft = 21;
            } else if(viewportWidth > 300 && viewportWidth < 500) {
                akeStartLeft = 6; //m
                akeSluttScroll = 370; //l

                vers2StartScroll = 350;
                    vers2SluttScroll = 380; //390
                vers2StartLeft = 1;
                vers2SluttLeft = 30; //37

                refreng2StartScroll = 380;
                refreng2SluttScroll = 410;
                refreng2StartLeft = 23;//28;
                refreng2SluttLeft = 35;

                vers3StartScroll = 410;
                vers3SluttScroll = 430;
                vers3StartLeft = 20;//53;
                vers3SluttLeft = 21;
            } else {
                akeStartLeft = 10; //xl
                akeSluttScroll = 400; //xl

                vers2StartScroll = 350;
                    vers2SluttScroll = 380; //390
                vers2StartLeft = 1;
                vers2SluttLeft = 30; //37

                refreng2StartScroll = 380;
                refreng2SluttScroll = 410;
                refreng2StartLeft = 23;//28;
                refreng2SluttLeft = 35;


                vers3StartScroll = 410;
                vers3SluttScroll = 430;
                vers3StartLeft = 20;//53;
                vers3SluttLeft = 21;
            }
            akeBilde.css({width: slide4Width/25});
            akeBilde.attr('data-'+ akeStartScroll +'p', 'left[x]:'+akeStartLeft+'%;top[y]:'+akeStartTop+'%');
            akeBilde.attr('data-'+ akeSluttScroll +'p', 'left[x]:'+akeSluttLeft+'%;top[y]:'+ akeSluttTop+'%');
            // akeBilde.attr('data-'+ (akeSluttScroll +50) +'p', 'left[x]:'+(akeSluttLeft+5)+'%;top[y]:'+ (akeSluttTop)+'%');

           	console.log("log left: "+akeBilde.css("left"));

            var imageWidth = $('#slides').width();

            var percentage = 100 - ((viewportWidth / imageWidth) * 100);
            $('#slides').attr('data-450p', 'transform:translate(-' + percentage + '%,-66.66%);');

            var transform = 'translate(' + (imageWidth - viewportWidth) + 'px, 200%)';
            $('#slide5').css({'transform': transform, '-moz-transform': transform, '-webkit-transform': transform});

            skrollr.get().refresh();


        }
        resize();
        $(window).resize(function () {
            console.log('resize');
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
        var snowBackground = document.getElementById(backgroundId);
        var ctx = canvas.getContext('2d');

        var width = 510; //window.innerWidth;
        var height = 550; //window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        var maxPixels = 5;
        var particles = [];
        for(var i = 0 ; i < maxPixels; i++)
        // particles.forEach(function()
        {
            particles.push({
                x: Math.random()*width,
                y: Math.random()*height,
                r: Math.random()*3,
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
                ctx.fill();
                update();
            }
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
                            particles[i] = {x: -5, y: Math.random()*height, r: p.r, d: p.d};
                        }
                        else
                        {
                            //Enter from the right
                            particles[i] = {x: width+5, y: Math.random()*height, r: p.r, d: p.d};
                        }
                    }
                }
            }
        }

        //animation loop
        setInterval(draw, 50);
    }
        generateSnow('snowBackground1', 'snowWindow1');
        generateSnow('snowBackground2', 'snowWindow2');

    };

    function autoplay() {
        if(s.getScrollTop() === 0 ) {
            s.animateTo(document.body.offsetHeight, { duration: 80000}, {interruptible: true});
        }
    }
    setTimeout(autoplay, 10000);
}(window, skrollr));



i18n.init({ detectLngQS: 'lang', useCookie : false }, function(t) {
    $(".slide").i18n();

});

//setup audio behaviour
(function() {
    var audio = document.getElementById('audioelement');
    var playpause = document.getElementById('playpause');
    var playing = false;

    playpause.addEventListener('click', function(){
        if(audio){
            if(audio.paused == true) {
                console.log('Button clicked');

                console.log(audio.play());
                $('#audioelement').attr('autoplay');
                playing = true;
            } else {
                playing = false;
                audio.pause();
            }
        }
    });
    var hidden = 'hidden';

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
        window.onpageshow = window.onpagehide
            = window.onfocus = window.onblur = onchange;
    }

    function onchange (evt) {
        if(this !== undefined) {
            if(this[hidden]){
                audio.pause();
            } else if(playing) {
                audio.play();
            }
        }
    }

    // set the initial state (but only if browser supports the Page Visibility API)
    if( document[hidden] !== undefined )
        onchange({type: document[hidden] ? "blur" : "focus"});
})();
