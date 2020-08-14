var cycle = 0; 
var allBackgrounds = ["grey","grey","grey"]; 
var a = ["HAPPY","BIRTHDAY","SASI"]; 
var siz=["150px","120px","150px"];

setInterval(function() { 
	if (cycle < 3) { 
		document.body.style.backgroundColor = allBackgrounds[cycle];
 		cycle += 1; 
	} else {  
		cycle = 0; 
	} 
}, 50); 

setInterval(function() { 
	if (cycle < 3) { 
		document.getElementById("abba").innerHTML = a[cycle];
		document.getElementById("abba").style.fontSize = siz[cycle]; 
 		cycle += 1; 
	} else {  
		cycle = 0; 
	} 
}, 1000);