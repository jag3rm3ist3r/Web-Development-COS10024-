/* validate form input data */
function validate() {
	/* Radio buttons */
	var pickup = $("#pickup").prop("checked");
	var delivery = $("#delivery").prop("checked")
	var visa = $("#visa").prop("checked");
	var mastercard = $("#mastercard").prop("checked");
	var amex = $("#amex").prop("checked");

	/* Fields */
	var address = $("#address").val();
	var phone = $("#phone").val();
	var uname = $("#uname").val();
	var ordertext = $("#ordertext").val();
	var billaddr = $("#billaddr").val();
	var cardno = $("#cardno").val();

	/* Checkboxes */
	var billaddrtick = $("#billaddrtick").prop("checked");
	var margherita = $("#margherita").prop("checked");
	var margregret = $("#margregret").prop("checked");
	var hawnopin = $("#hawnopin").prop("checked");
	var hamcheese = $("#hamcheese").prop("checked");
	var other = $("#other").prop("checked");

	var errMsg = "";
	var result = true;

	/* Since there is a default value this will never be used. */
	if ((!pickup)&&(!delivery)) {
		errMsg += "<li>Pickup or delivery must be selected.</li>";
	}

	/* Hidden address textbox only when delivery is selected. */
	if ((address == "")&&(delivery)) {
		errMsg += "<li>Address cannot be empty.</li>";
	}
	/* Hidden billing address textbox only when billing address is different. */
	if ((billaddr == "")&&(!billaddrtick)) {
		errMsg += "<li>Billing address cannot be empty.</li>";
	}

	/* Card Number */
	if ((cardno == "")&&(delivery)) {
		errMsg += "<li>Card number cannot be empty.</li>";
	}
	var cardnopattern = /^[0-9]+$/;
	if ((!cardno.match(cardnopattern))&&(delivery)) {
		errMsg += "<li>Card number must only consist of numbers with no spaces.</li>";
	} else {
		if ((cardno.length != 16)&&(visa)) {errMsg += "<li>Visa card numbers must consist of 16 digits.</li>";}
		if ((cardno.length != 16)&&(mastercard)) {errMsg += "<li>MasterCard card numbers must consist of 16 digits.</li>";}
		if ((cardno.length != 15)&&(amex)) {errMsg += "<li>American Express card numbers must consist of 15 digits.</li>";}
	}

	/* Phone number */
	var pattern = /\D+/;
	if (phone == "") {
		errMsg += "<li>Phone cannot be empty.</li>";
	} else if (phone.match (pattern)) {
		errMsg += "<li>Phone number must only contain numbers.</li>";
	}
	if (uname == "") {
		errMsg += "<li>Customer name cannot be empty.</li>";
	}
	/* At least one must be selected. */
	if ((!margherita)&&(!margregret)&&(!hawnopin)&&(!hamcheese)&&(!other)) {
		errMsg += "<li>At least one pizza must be selected.</li>"
	}
	if ((ordertext == "")&&(other)) {
		errMsg += "<li>Order notes cannot be empty if other is selected.</li>";
	}

	if(errMsg != "") {
		errMsg =	"<div id='scrnOverlay'></div>"
					+ "<section id='errWin' class='window'><ul>"
					+ errMsg
					+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";

		var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;

		$("body").after(errMsg);
		$("#scrnOverlay").css('visibility', 'visible');
		$("#errWin").css('height', numOfItems.toString() + 'em');
		$("#errWin").css('margin-top', (numOfItems/-2).toString() + 'em');
		$("#errWin").show();
		$("#errBtn").click (
			function() {
				$("#scrnOverlay").remove();
				$("#errWin").remove();
			}
		);
		result = false;
	}

	return result;
}

function addrshow () {
	var addresscontainer = $("#addresscontainer");
	var delivery = $("#delivery").prop("checked");
	var billaddrtick = $("#billaddrtick").prop("checked");
	var billaddrtickcontainer = $("#billaddrtickcontainer");
	var billaddr = $("#billaddr")
	var billaddrcontainer = $("#billaddrcontainer");
	var address = $("#address").val();
	var cardcontainer = $("#cardcontainer");
	var cardnocontainer = $("#cardnocontainer");


	if (billaddrtick) {
		billaddr.prop('disabled', true);
		billaddr.val(address)
	} else {
		billaddr.prop('disabled', false);
		billaddr.val("")
	}

	if (delivery) {
		addresscontainer.css('display', 'block');
		billaddrcontainer.css('display', 'block');
		billaddrtickcontainer.css('display', 'block');
		cardcontainer.css('display', 'block');
		cardnocontainer.css('display', 'block');
	} else {
		addresscontainer.css('display', 'none');
		billaddrcontainer.css('display', 'none');
		billaddrtickcontainer.css('display', 'none');
		cardcontainer.css('display', 'none');
		cardnocontainer.css('display', 'none');
	}
}


/* link HTML elements to corresponding event function */
function init () {
	/* link function validate() to the onsubmit event of the form */
	$("#ordform").submit(validate);
	addrshow();

	$("#pickup").click(addrshow);
	$("#delivery").click(addrshow);
	$("#billaddrtick").click(addrshow);

	/*
	 * Got this code from here and modified it to suit my needs:
	 * https://stackoverflow.com/questions/2977428/jquery-mirror-one-text-input-to-another
	 */
	$('#address').bind('keypress keyup blur',
		function() {
			var billaddrtick = $("#billaddrtick").prop("checked");
			if(billaddrtick) {
				$('#billaddr').val($(this).val());
			}
		}
	);
}

/* execute function init() once the window is loaded*/
/*window.onload = init;*/
$(document).ready(init);
