export default function () { 


// setInterval(function(){ 
// 	console.log('werkt');
// 	document.getElementsByTagName('h1')[0].style.fontWeight = 300;
// 	document.getElementsByTagName('h1')[0].style.fontStyle = "normal";

// }, 1000);

// setInterval(function(){ 
// 	console.log('werkt');
// 	document.getElementsByTagName('h1')[0].style.fontFamily = "source-code-pro";	
// 	document.getElementsByTagName('h1')[0].style.fontWeight = 300;
// 	document.getElementsByTagName('h1')[0].style.fontStyle = "italic";

// }, 2000);

// setInterval(function(){ 
// 	console.log('werkt');
// 	document.getElementsByTagName('h1')[0].style.fontWeight = 400;
// 	document.getElementsByTagName('h1')[0].style.fontStyle = "normal";

// }, 3000);

// setInterval(function(){ 
// 	console.log('werkt');
// 	document.getElementsByTagName('h1')[0].style.fontWeight = 400;
// 	document.getElementsByTagName('h1')[0].style.fontStyle = "italic";
// }, 4000);

// setInterval(function(){ 
// 	console.log('werkt');
// 	document.getElementsByTagName('h1')[0].style.fontFamily = "Comic Sans MS";
// }, 4500);

var settings = [
	["source-code-pro", 300, "normal"], 
	["source-code-pro", 300, "italic"],
	["source-code-pro", 400, "normal"],
	["source-code-pro", 400, "italic"],
	["Comic Sans MS", 400, "normal"],
	["source-code-pro", 500, "normal"],
	["source-code-pro", 500, "italic"],
];

console.log(settings[0][1])

var counter = 0;
setInterval(function(){

    document.getElementsByTagName('h1')[0].style.fontFamily = settings[counter][0]
    document.getElementsByTagName('h1')[0].style.fontWeight = settings[counter][1]
    document.getElementsByTagName('h1')[0].style.fontStyle = settings[counter][2]

    counter++;
    if(counter === 7) {
        counter = 0;
    }
}, 1000);

};
