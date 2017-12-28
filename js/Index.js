(function () {
	var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTPP"),
	callee = arguments.callee;
	request.open("GET", location.href + "?rand=" + new Date(), true);
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			var doc = document.createElement("DIV");
			doc.innerHTML = request.responseText;
			document.body.innerHTML = doc.getElementsByTagName("BODY")[0].innerHTML;
			setTimeout(callee, 1000);
		}
	};
	request.send(null);
})();