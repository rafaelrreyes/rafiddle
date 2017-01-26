
//Button handling
$('.topbar-button').hover(
	function() {	//handler hvoer in
		$(this).addClass("highlighted-button");
	}, 
	function() {	//handler hover out
	$(this).removeClass("highlighted-button");
});

$('.topbar-button').click(function() {
	$(this).toggleClass("active");
	$(this).removeClass("highlighted-button");

	var currInput = $(this).attr("id") + "Input";
	$('#' + currInput).toggleClass('hidden');
	var totalElements = 4 - $('.hidden').length;
	$('.text-panel').height($(window).height() - $('#header').height() - 10);
	$('.text-panel').width(($(window).width() / totalElements ) - 10);
	$('.panel').height($(window).height() - $('#header').height() - 10);
	$('.panel').width(($(window).width() / totalElements ) - 10);
});

$('.text-panel').height($(window).height() - $('#header').height() - 10);
$('.text-panel').width(($(window).width() / 4 ) - 10);
$('.panel').height($(window).height() - $('#header').height() - 10);
$('.panel').width(($(window).width() / 4 ) - 10);

$('#output').contents().find("html").html($('#htmlInput').val());

$('textarea').on('change keyup paste', function() {
	updateOutput();
});

function updateOutput() {
	$('#outputButtonInput').contents().find("html").html(
		"<html>" +
			"<head>" +
				"<style type='text/css'>" +
				$('#cssInput').val() +
				"</style>" +
			"</head>" +
			"<body>" + 
			$('#htmlInput').val() + 
			"</body>" + 
		"</html>");

	document.getElementById('outputButtonInput').contentWindow.eval(
		$('#javascriptInput').val()
	);
}

//Start up application 
function initialize() {
	updateOutput();
}

initialize();