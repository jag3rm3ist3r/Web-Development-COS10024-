/* function validate()will validate form data */
function validate() {
	/* Fields */
	var uid = $("#uid").val();
	var email = $("#email").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();

	/* Radio buttons */
	var margherita = $("#margherita").prop("checked");
	var margregret = $("#margregret").prop("checked");
	var hawnopin = $("#hawnopin").prop("checked");
	var hamcheese = $("#hamcheese").prop("checked");


	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;

	/* Check uid */
	if (uid == "") {
		errMsg += "<li>User ID cannot be empty.</li>";
	}

	/* Check email */
	if (email == "") {
		errMsg += "<li>eMail cannot be empty.</li>";
	} else {
		if (email.indexOf('@') == 0 ) {
			errMsg += "<li>eMail cannot start with an @ symbol.</li>";
		}
		if (email.indexOf('@') < 0 ) {
			errMsg += "<li>eMail must contain an @ symbol.</li>";
		}
		var emailpattern = /@$/;
		if (email.match(emailpattern)) {
			errMsg += "<li>eMail must not end with an @ symbol.</li>";
		}
	}

	/* Check pwd1 & pwd2 */
	if (pwd1 == "") {
		errMsg += "<li>Password cannot be empty.</li>";
	}
	if (pwd2 == "") {
		errMsg += "<li>Retype password cannot be empty.</li>";
	}
	if (pwd1 != pwd2) {
		errMsg += "<li>Passwords do not match.</li>";
	}

	/* Check uname */
	if (uname == "") {
		errMsg += "<li>User name cannot be empty.</li>";
	} else if (! uid.match (pattern)) {
		errMsg += "<li>User name contains symbols.</li>";
	}

	/* Check favourite */
	if ((!margherita)&&(!margregret)&&(!hawnopin)&&(!hamcheese)) {
		errMsg += "<li>A favourite pizza must be selected.</li>";
	}


	/* Display error message any error(s) is/are detected */
	/*if (errMsg != "") {
		alert (errMsg);
		result = false;
	}*/
	/* Display error message if any error(s) is/are detected */
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

/* link HTML elements to corresponding event function */
function init () {
	/* link function validate() to the onsubmit event of the form */
	$("#regform").submit(validate);
}

/* execute function init() once the window is loaded*/
/*window.onload = init;*/
$(document).ready(init);
