var bClear = document.getElementById("clear");
var bCirc = document.getElementById("circle");
var bDvd = document.getElementById("dvd");
var svg = document.getElementById("vimage");
var rid;

var stop = function() {
	window.cancelAnimationFrame(rid);
}

var clear = function() {
	while (svg.hasChildNodes()) {
		svg.removeChild(svg.lastChild);
	}
}

var circ = function() {
	clear();
	window.cancelAnimationFrame(rid);
	var dx = 1;
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var height = vimage.getAttribute("height")
	c.setAttribute("cx", vimage.getAttribute("width")/2);
	c.setAttribute("cy", height/2);
	c.setAttribute("r", "1");
	c.setAttribute("fill", "aliceblue");
	c.setAttribute("stroke", "black");
	svg.appendChild(c);

	var drawCirc = function() {
		if (c.getAttribute("r")>=height/2) { dx = -1; }
		c.setAttribute("r", parseInt(c.getAttribute("r"))+dx);
		console.log(c.getAttribute("r"));
		rid = window.requestAnimationFrame(drawCirc);
	}
	drawCirc();
}

var dvd = function() {
	var x = Math.random()*c.width; 
    var y = Math.random()*c.height;
    var xvol = 1;
    var yvol = 1;
    window.cancelAnimationFrame(rid);

    var d = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    var drawDvd = function() {
    	console.log(rid);


    }
}

bClear.addEventListener('click', stop);
bCirc.addEventListener('click', circ);
bDvd.addEventListener('click', dvd);