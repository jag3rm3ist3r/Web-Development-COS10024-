/* function showPwdWin will show the Password Rule window */
function showPwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin"); /*get element "pwdHelpWin" */
	var scrnOverlay = ____________________________________;	/*get element "scrnOverlay" */

	pwdHelpWin.style.display = "block";    			/*display element pwdHelpWin*/
	scrnOverlay.style.visibility = "visible";  		/*hide element scrnOverlay */
}

/* function hidePwdWin will hide the Password Rule window */
function hidePwdWin () {
	var pwdHelpWin = _______________________________________; 	/*get element "pwdHelpWin" */
	var scrnOverlay = ______________________________________;  /*get element "scrnOverlay" */

	______________________________________;  	/* hide element pwdHelpWin by setting the CSS property display as "none" */

	______________________________________;  	/* display element scrnOverlay by setting the CSS property visibility as "hidden" */
}
/* link functions to appropriate events of corresponding HTML elements*/
function init () {
/* link the variables to the HTML elements */
	var pwdHelpBtn = _________________________________;  /* get element "pwdHelpBtn" */
	var pwdHelpClose = _______________________________;  /* get element "pwdHelpClose" */
		
	pwdHelpBtn.onclick = showPwdWin;	/* link function showPwdWin to the onclick event of button pwdHelpBtn */
	_______________________________;   	/* links function hidePwdWin to the onclick event of button pwdHelpClose*/
}

/* execute the initialisation function once the window*/
window.onload = init;
