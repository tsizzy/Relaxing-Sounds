var tides_vol = 0;
var tides;
var chime_vol = 0;
var chimes;

var flute_vol = 0;
var flute;

var jungle_vol = 0;
var jungle;

var sax_vol = 0;
var sax;

var thunder_vol = 0;
var thunder;

var and_vol = 0;
var andante;



function tidesOutput(){
     var tideslider = document.getElementById("tides_volume");;
     var tides_output = document.getElementById("tides_vol_output");;
     tides_output.innerHTML = tideslider.value * 10 + "%";

	tides_vol = document.getElementById("tides_volume").value;
	tides_output.innerHTML = tides_vol;

	tides_volume();
}

function chimesOutput(){
	var chimeslider = document.getElementById("chimes_volume");
    var chime_output = document.getElementById("chime_vol_output");
    chime_output.innerHTML = chimeslider.value * 10 + "%";

    chime_vol = document.getElementById("chimes_volume").value;
    chime_output.innerHTML = chime_vol;

    chime_volume();
}

function fluteOutput(){
    var fluteslider = document.getElementById("flute_volume");
    var flute_output = document.getElementById("flute_vol_output");
    flute_output.innerHTML = fluteslider.value * 10 + "%";

	flute_vol = document.getElementById("flute_volume").value;
	flute_output.innerHTML = flute_vol;

	flute_volume();
}

function jungleOutput(){
    var jungleslider = document.getElementById("jungle_volume");
    var jungle_output = document.getElementById("jungle_vol_output");
    jungle_output.innerHTML = jungleslider.value * 10 + "%";

	jungle_vol = document.getElementById("jungle_volume").value;
	jungle_output = jungle_vol;

	jungle_volume();
}

var saxOutput =  function(){
	var saxslider = document.getElementById("sax_volume");
    var sax_output = document.getElementById("sax_vol_output");
    sax_output.innerHTML = saxslider.value * 10 + "%";

	sax_vol = document.getElementById("sax_volume").value;
    sax_output.innerHTML = sax_vol;	

    sax_volume();
} 

var thunderOutput = function(){
     var thunderslider = document.getElementById("thunder_volume");
     var thunder_output = document.getElementById("thunder_vol_output");
     thunder_output.innerHTML= thunderslider.value * 10 + "%";

     thunder_vol = document.getElementById("thunder_volume").value;
     thunder_output.innerHTML=thunder_vol;

     thunder_volume();
}

var andanteOutput =  function(){
	var andanteslider = document.getElementById("andante_volume");
    var andante_output = document.getElementById("and_vol_output");
    andante_output.innerHTML = andanteslider.value * 10 + "%";

	and_vol = document.getElementById("andante_volume").value;
    andante_output.innerHTML = and_vol;	

    andante_volume();
} 

var sound = function(){
	tides = new Audio("sounds/tide_waves.wav");
    tides.play();
	tides.loop = true;

	chimes = new Audio("sounds/chimes.wav");
    chimes.play();
    chimes.loop = true;

    flute = new Audio("sounds/chinese_flute.wav");
	flute.play();
	flute.loop = true;

	jungle = new Audio("sounds/jungle.wav"); 
    jungle.play();
    jungle.loop = true;

    sax = new Audio("sounds/saxophone.wav");
    sax.play();
    sax.loop = true;

    thunder = new Audio("sounds/thunder.wav");
    thunder.play();
    thunder.loop = true;

    andante = new Audio("sounds/andante.mp3");
    andante.play();
    andante.loop = true;
}

function tides_volume(){
	tides.volume = tides_vol/10;
 }

var andante_volume = function(){
    andante.volume = and_vol/10;
}

function chime_volume(){	
    chimes.volume = chime_vol/10;	   
 }

function flute_volume(){

	flute.volume = flute_vol/10;
}

function jungle_volume(){
	jungle.volume = jungle_vol/10;
 }

function sax_volume(){
	sax.volume = sax_vol/10;
 }

function thunder_volume(){
	thunder.volume = thunder_vol/10;
 }

sound();

