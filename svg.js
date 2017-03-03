var bStop = document.getElementById("stop");
var bCirc = document.getElementById("circle");
var bDvd = document.getElementById("dvd");
var svg = document.getElementById("vimage");
var rid;
var height = vimage.getAttribute("height");
var width = vimage.getAttribute("width");

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

	c.setAttribute("cx", width/2);
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
    clear();
    var offset=50;
    var xvol = 1;
    var yvol = 1;
    window.cancelAnimationFrame(rid);

    var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
    d.setAttribute("href", "pic.png");
    d.setAttribute("x", Math.random()*(width-offset));
    d.setAttribute("y", Math.random()*(height-offset));
    d.setAttribute("width", offset);
    d.setAttribute("height", offset);
    svg.appendChild(d);

    var drawDvd = function() {
    	//console.log(rid);
	var curx = parseInt(d.getAttribute("x"));
	var cury = parseInt(d.getAttribute("y"));
	if ((curx>=width-offset) || (curx==0)) {
	    xvol *= -1;
	}
	if ((cury>=height-offset) || (cury==0)) {
	    yvol *= -1;
	}
	d.setAttribute("x", curx+xvol);
	d.setAttribute("y", cury+yvol);
	rid = window.requestAnimationFrame( drawDvd );
    }
    drawDvd();
}

bStop.addEventListener('click', stop);
bCirc.addEventListener('click', circ);
bDvd.addEventListener('click', dvd);
