/* write functions that define the action for each event */
function validate() {
	var sid = document.getElementById("sid").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;

	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;
	var passpattern = /^[.*]{8,255}$/;

	/* Account Information */
	if(sid == "") { errMsg += "eMail cannot be empty.\n"; }
	if(sid.indexOf('@') == 0 ) { errMsg += "User ID cannot start with an @ symbol.\n"; }
	if(sid.indexOf('@') < 0 ) { errMsg += "User ID must contain an @ symbol.\n"; }

	if(pwd1 != pwd2) { errMsg += "Passwords do not match.\n"; }
	if(pwd1 == "") { errMsg += "Password cannot be empty.\n"; }
	if(pwd2 == "") { errMsg += "Retyped password cannot be empty.\n"; }
	if(pwd1.match(passpattern)) { errMsg += "Password must be between 8 and 255 characters in length.\n"; }

	/* User Information */
	if(uname  ==  "")  { errMsg  +=  "User name cannot be empty.\n"; }
	if(! uname.match(pattern)) { errMsg += "User name contains symbols.\n"; }
	if((genm == "")&&(genf == "")) { errMsg += "A gender must be selected.\n"; }

	if(errMsg != "") { alert(errMsg); result = false; }

	return result;
}

function init () {
	regForm = document.getElementById("regform");

	regForm.onsubmit = validate;
}

window.onload = init;
