'use strict';
(function(window){
var s = skrollr.init({
    smoothScrolling: true
    });

window.onload = function(){
	var canvas = document.getElementById('snowWindow');
	var snowBackground = document.getElementById('snowBackground');
	var ctx = canvas.getContext('2d');

	var width = 400; //window.innerWidth;
	var height = 400; //window.innerHeight;
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
}(window));
