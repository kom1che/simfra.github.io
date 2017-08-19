$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$("#portfolio_grid").mixItUp();

	$(".s_project li").click(function() {
		$(".s_project li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".top-text h1").animated("fadeInDown", "fadeOutUp");

	$(".top-text p, .section-header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".right .service_image").animated("fadeInRight", "fadeOutRight");
	$(".left").animated("fadeInLeft", "fadeOutLeft");
	$(".form_box").animated("fadeInRight", "fadeOutRight");
	$(".con_box").animated("fadeInLeft", "fadeOutLeft");

	function heightDetection(){
		$(".main_head").css("height", $(window).height());
		$(".top-wrapper").css("height", $(window).height()); 
	};

	function menuClosing(){
		$(".burger-menu").removeClass("burger-menu-clicked");
		$(".burger-menu").addClass("burger-menu-closing");
	};

	heightDetection();

	$(window).resize(function(){
		heightDetection();
	});

	$(".burger-menu").on("click", function() {
	  if ($(this).hasClass("burger-menu-clicked")) {
	    $(this).removeClass("burger-menu-clicked");
	    $(".top-text").removeClass(".h_opacify");
	    $(".top-mnu").fadeOut(600);
	    $(".top-mnu li a").removeClass("fadeInUp animated");
	    $(this).addClass("burger-menu-closing");
	  } else {
	    $(this).addClass("burger-menu-clicked");
	    $(".top-text").addClass(".h_opacify");
	    $(".top-mnu").fadeIn(600);
	    $(".top-mnu li a").addClass("fadeInUp animated");
	    $(this).removeClass("burger-menu-closing");
	  }
	});

	$(".top-mnu ul a").click(function(){
		$(".top-mnu").fadeOut(600);
		menuClosing();
	}).append("<span>");

	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_desr").attr("id", "work_" + i);
	}); 
	
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top-mnu ul a").mPageScroll2id();

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
