export default function () { 

document.addEventListener("DOMContentLoaded", function(event) {
	setTimeout(function(){ 
		document.getElementsByClassName("loader")[0].style.display = "none";
 	}, 1500);
});

};
