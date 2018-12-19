$(function(){
	$('#addtodolist').on('click', function() {

		var val = $('#inputtodolist').val();
		$('#oltodolist').prepend('<li class="list-group-item">'+val+'<span id="rem" class="remove-button">X</span></li>')

		$('#rem').on('click', function() {
			$(this).parent().remove();
		});
	});

})
