function modalShow() {
	$("#id_modal").show();
	$("#id_modal").css('animation-name', 'show_modal');
	// $(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
	// $(".modal-content:first").css('animation-name', 'hide_modal');
	$("#id_modal").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 300);
}