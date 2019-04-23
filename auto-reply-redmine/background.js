var assigner = $(".has-notes:last a.user").html()
$("#update").show();
	// $("body").append('Testttt11');
	$('#issue_status_id option[value="4"]').attr('selected', 'selected');
	$('#issue_assigned_to_id option:contains(' + assigner + ')' ).attr('selected', 'selected');
	$("#issue_notes").val('Hi ' + assigner + "\n" + '已完成 請確認 謝謝');
	
	// $("#issue-form").submit(); //submit will cause endless loop

	// $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	console.log($(document).height());
	$("html, body").scrollTop($(document).height());