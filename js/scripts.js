// My Scripts
// Media Element Player
$('video').mediaelementplayer();
//Lettering
$('h1').lettering();
//Curtain
function classToggle() {
    this.classList.toggle('curtain');
    this.classList.toggle('curtain2');

}
document.querySelector('.curtain').addEventListener('click', classToggle);

$(document).ready(function() {
	$('.curtain').on('click', function(){
		$('.wrapper').toggle();
	});
});
$(document).ready(function() {
	$('.curtain').on('click', function(){
		$('.clickme').toggle();
	});
});