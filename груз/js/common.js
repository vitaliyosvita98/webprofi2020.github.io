$(document).ready(function() {

	$("#form1").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form1").trigger("reset");
			$.magnificPopup.close();
		});
		return false;
	});
});
