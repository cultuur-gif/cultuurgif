import Header from './modules/header';
import Anim from './modules/anim';
import Loader from './modules/loader';

Loader();
Header();
Anim();

let fillerDisplay = document.getElementsByClassName("filler")[0],
		hdat = document.getElementsByClassName("menu")[0];

function showFiller (showType){
	fillerDisplay.style.display = showType;
}

function hideCaseStudies (){
	document.getElementsByClassName("scroll")[0].className += " casestudies--hide";
}

// Kleine animatie voor hovers
hdat.addEventListener('mouseover', function(){showFiller('block')});
hdat.addEventListener('mouseout', function(){showFiller('none')});
hdat.addEventListener('click', hideCaseStudies);




