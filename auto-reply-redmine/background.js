	$("#update").show();
	$("body").append('Testttt11');
	// $("#issue_status_id").val = '5';
	$('#issue_status_id option[value="4"]').attr('selected', 'selected');
	$('#issue_assigned_to_id option:contains("wilson")').attr('selected', 'selected');
	// $("#issue_assigned_to_id").val = '63';
	// $('#issue_assigned_to_id option[text="wilson"]').attr("selected","selected");
	$("#issue_notes").val('Hi' + "\n" +'已完成 請確認 謝謝');
	// $("#issue-form").submit();
	/* Do some initialization */
	// $("html, body").animate({ scrollTop: $(document).height() }, 1000);

	$("html, body").scrollTop($(document).height()-50);