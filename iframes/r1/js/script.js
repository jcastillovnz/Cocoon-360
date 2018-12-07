

$( window ).on( "load", function() {

  document.getElementById("loader").style.display = "none";

});


$(document).ready(function(){

var $threeSixty = $('.threesixty');
$threeSixty.threeSixty({
dragDirection: 'horizontal',
useKeys: true,
draggable: true,
});


var interval;
$('.play').click(function(){
var mode =this.value;
if (mode=="play") {
document.getElementById("play-icon").className = "fas fa-pause-circle";	
interval = setInterval(play, 200);
this.value="stop";
}
if (mode=="stop") {
document.getElementById("play-icon").className = "fas fa-play-circle";
clearInterval(interval);
this.value="play";
}
function play() {
$threeSixty.nextFrame();
}




});




$('.next').click(function(){
$threeSixty.nextFrame();


});

$('.prev').click(function(){
$threeSixty.prevFrame();
});


$threeSixty.on('down', function(){
$('.ui, h1, h2, .label, .examples').stop().animate({opacity:0}, 300);
});


 $threeSixty.on('up', function(){
 $('.ui, h1, h2, .label, .examples').stop().animate({opacity:1}, 500);
});



$('#control-zoom-in').on('click', function(e) {
changeZoom(10, e);
 });


$('#control-zoom-out').on('click', function(e) {
  changeZoom(-10 , e);
 });


 function changeZoom(amount, e) {
if (currheight === 600  ) return false;
  else {
var currheight =  $('.renders').css("height");

var newheight =  parseInt(currheight)  + amount;

 $('.renders').css("height" , newheight );
 $('.renders').css("z-index" , "0" );
 $('.masks').css("height" , newheight );
 $('.highlights').css("height" , newheight);
  }
  }
///TOUCH ZOOM
var move_event = 'mousemove';
var up_event = 'mouseup';
var down_event = 'mousedown';

if ("ontouchstart" in window) {
move_event = 'touchmove';
up_event = 'touchend';
down_event = 'touchstart';
}
rxStart = "ontouchstart" in window ? e.targetTouches[0].pageX : e.screenX;
ryStart = "ontouchstart" in window ? e.targetTouches[0].pageY : e.screenY;
if (e.touches.length == 2) {
var xStart = "ontouchstart" in window ? e.targetTouches[1].pageX : 0;
var yStart = "ontouchstart" in window ? e.targetTouches[1].pageY : 0;
}
var prevDiff = -1;
var scaling = false;
//Con touchstart
if ("ontouchstart" in window) {
//var touches = e.changedTouches;
if (e.touches.length != 2) {
//Aquí hacemos lo que se tenga que hacer cuando se usa un dedo
}
if (e.touches.length == 2) {
scaling = true;
}
}
//Con touchmove
if(scaling) {
// Calculate the distance between the two pointers
var curDiff = Math.abs(ev.targetTouches[0].pageX - ev.targetTouches[1].pageX);
if (prevDiff > 0) {
if (curDiff > prevDiff) {
// The distance between the two pointers has decreased
changeZoom(10, e);
}
if (curDiff < prevDiff) {
// The distance between the two pointers has increased
changeZoom(-10 , e);
}
}

// Cache the distance for the next move event
prevDiff = curDiff;
}
//Con touchend
if(scaling) {
zoomEnd(e);
prevDiff = -1;
scaling = false;

}




});




