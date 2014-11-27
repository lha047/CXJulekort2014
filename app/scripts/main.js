'use strict';

function togglePlayPause() {
	 // Grab a handle to the audio
	var audio = document.getElementById('audio');
    var playpause = document.getElementById('playpause');
    if (audio.paused || audio.ended) {
    	/*playpause.className = 'fa fa-bell-slash-o';*/
        audio.play();
    } else {
    	/*playpause.className = 'fa fa-bell-o';*/
        audio.pause();
    }
}

(function(window, skrollr){
var s = skrollr.init({
    easing: {
    	sin : function(p) {
            var s = Math.sin(p);//(Math.sin(p * Math.PI * 2 - Math.PI/2)/2);
            console.log('sin: ' + s);
    		return s;
    	},
    	cos : function(p){
            var c = p;//(Math.cos(p * Math.PI * 2 - Math.PI/2)/2);
            console.log('cos: ' + c);
    		return c;
    	}
    },
    render : function(data) {
    	if(data.curTop === data.maxTop) {
    		this.setScrollTop(0, true);
    	}
    },
    smoothScrolling: true
    });

function setLanguage(lang) {

}

window.onload = function(){
        function resize() {
            var viewportWidth = $(window).width();

            $('#slides').css({width: $('#slide4').height() * 3.55 + 'px'});
            var slide4Width = $('#slide4').width();

            console.log("slide width: " + slide4Width);
            /*Posisjoner akebilde*/
            var akeBilde = $('#akeBilde'),
                akeStartScroll = 355,
                akeSluttScroll = 430,
                akeStartLeft = 3,
                akeStartTop = 20,
                akeSluttLeft = 45,
                akeSluttTop = 70;
            akeBilde.css({width: slide4Width/25});
            akeBilde.attr('data-'+ akeStartScroll +'p', 'left:'+akeStartLeft+'%;top:'+akeStartTop+'%');
            akeBilde.attr('data-'+ akeSluttScroll +'p', 'left:'+akeSluttLeft+'%;top:'+akeSluttTop+'%');


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


	setLanguage('no');

	var canvas = document.getElementById('snowWindow');
	var snowBackground = document.getElementById('snowBackground');
	var ctx = canvas.getContext('2d');

	var width = 510; //window.innerWidth;
	var height = 550; //window.innerHeight;
	canvas.width = width;
	canvas.height = height;

	var maxPixels = 7;
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
	setInterval(draw, 33);
};
}(window, skrollr));


i18n.init(function(t) {
    $("#ttt").i18n();
});
