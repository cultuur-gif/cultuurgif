import {OldFilmFilter} from '@pixi/filter-old-film';
import {GlitchFilter} from '@pixi/filter-glitch';
import {Container} from 'pixi.js';

export default function () { 
	
	let app = new PIXI.Application({width: (window.innerWidth - 15), height: window.innerHeight});
	app.renderer.backgroundColor = 0x0ffffff;
	document.getElementsByTagName("header")[0].appendChild(app.view);

	//load an image and run the `setup` function when it's done
	PIXI.loader
  	.add("./images/header.jpg")
  	.load(setup);

	//This `setup` function will run when the image has loaded
	function setup() {

  let bg = new PIXI.Sprite(PIXI.loader.resources["./images/header.jpg"].texture);

  // bg.width = app.screen.width;
  // bg.height = app.screen.height;
  bg.x = app.screen.width/10;
  bg.y = app.screen.height/10;

  var filmFilter = new OldFilmFilter({
  	"sepia": 0,
  	"vignetting": 0
  }); 
  var glitchFilter = new GlitchFilter({
  	"fillMode": 1,
  	"offset": 5
  });
  // filmFilter.scratch = 0;
	glitchFilter.direction = 60;
	bg.filters = [filmFilter, glitchFilter];

	let handleMousemove = (event) => {
		glitchFilter.slices = Math.round(event.x/20);
		glitchFilter.refresh();
  	// console.log(`mouse position: ${event.x}:${event.y}`);
	};

document.addEventListener('mousemove', handleMousemove);

setInterval(function(){ 
	glitchFilter.red = [Math.round(Math.random()*30),Math.round(Math.random()*30)];
	glitchFilter.green = [Math.round(Math.random()*20),Math.round(Math.random()*20)];
}, 1000);

setInterval(function(){ 
	glitchFilter.red = [Math.round(Math.random()*30),Math.round(Math.random()*30)];
	glitchFilter.green = [Math.round(Math.random()*20),Math.round(Math.random()*20)];
}, 2500);

	/* Animatie */
	var count = 0;

	app.ticker.add(function() {
	    count = 0.10;
	    filmFilter.seed = (Math.random() +.3) * (count);
	    // glitchFilter.seed = Math.random();

	    // console.log(glitchFilter.seed);
	    // glitchFilter.seed = Math.random();
	    // glitchFilter.shuffle();
	    // glitchFilter.redraw();

	    // console.log(filmFilter.seed);
	});

  app.stage.addChild(bg);
}
};
