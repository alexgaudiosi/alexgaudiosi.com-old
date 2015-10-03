$(function(){

	var brandLogos = ["img/rolex.png", "img/Nasdaq.png", "img/lane-crawford.png", "img/airbus.jpg", "img/sothebys.jpg", "img/ibm.jpg", "img/jaguar.png", "img/tiffany.jpg", "img/virgin-atlantic.jpg", "img/hp.jpg", "img/financial-times.jpg", "img/htsi.jpg", "img/bloomberg.png", "img/gucci.jpg", "img/chanel.jpg", "img/mulberry.jpg", "img/bally.jpg", "img/cartier.jpg", "img/deutsche.jpg"];

	$("#examples").hide();

	$("#rolex").hover(function(){
		$("#examples img").attr('src', './img/examples/ex-rolex.jpg');		
	    $("#examples").fadeIn();
		}, function() {
	    $("#examples").fadeOut();
	});

	$("#laneCrawford").hover(function(){
		$("#examples img").attr('src', './img/examples/ex-laneCrawford.jpg');
        $("#examples").fadeIn();
		}, function() {
		    $("#examples").fadeOut();	
	});

	for (var i = 0; i < brandLogos.length; i++) {
	    $('.brands-container').append('<div class="brands wow animated fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"><img src='+brandLogos[i]+'></div');
	};
});