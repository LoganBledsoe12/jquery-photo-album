var $pageonecontainer = $('#pageonecontainer');
$pageonecontainer.on('click', clickone);
var $pagetwocontainer = $('#pagetwocontainer');
$pagetwocontainer.on('click', clicktwo);
$pagetwocontainer.hide();
$pageonecontainer.show();
var $imgone = $('#imgone');
$imgone.on('click', clickthree);
var $imgtwo = $('#imgtwo');
var $imgthree = $('#imgthree');
var $imgfour = $('#imgfour');
var $imgfive = $('#imgfive');
var $imgsix = $('#imgsix');
var $buttonsone = $('#buttonsone');

$buttonsone.on('mouseover', colorChange);
$buttonsone.on('click', clickfour);

$photoone.on('click', photoone);
$phototwo.on('click', phototwo);
$photothree.on('click', photothree);
$photofour.on('click', photofour);
$photofive.on('click', photofive);
$photosix.on('click', photosix);
var $photoone = $('#photoone');
var $phototwo = $('#phototwo');
var $photothree = $('#photothree');
var $photofour = $('#photofour');
var $photofive = $('#photofive');
var $photosix = $('#photosix');
$photoone.hide();
$phototwo.hide();
$photothree.hide();
$photofour.hide();
$photofive.hide();
$photosix.hide();





function clickone (){
	$pageonecontainer.hide();
	$pagetwocontainer.show();

}
function clickfour(){
	$photoone.show();
	$pagetwocontainer.hide();
 }


