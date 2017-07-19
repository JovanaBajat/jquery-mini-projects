$(document).ready(function(){
	

	$('#top-text').bind('input', function(){
		var write = $('#top-text').val()
		$('.top-caption').html(write)
	})

		$('#bottom-text').bind('input', function(){
		var write = $('#bottom-text').val()
		$('.bottom-caption').html(write)
	})
});