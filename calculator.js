// JavaScript Document
function d(val) {
	document.getElementById("d").value=val;
}
function v(val) {
	document.getElementById("d").value += val;
}

function e() {
	try{
		d(eval(document.getElementById("d").value));
	}
	catch(er) {
		d("Error");
		
		
/*
// Change Display
function d(val) {
	document.getElementById("d").value=val;
}

//Type numbers and operators
function v(val) {
	document.getELementById("d").value+= val;
}

//Evaluate the equation\
function e() {
	try {
		d ( eval ( document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}*/