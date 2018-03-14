chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			//console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			//<div id="eye_tracker" class="gesturetag"></div>
			var cursor = document.createElement("div");
			document.body.appendChild(cursor);
			cursor.id = 'eye_tracker';
			cursor.className = 'gesturetag';

			var test = document.createElement('script');
			test.src = chrome.extension.getURL('js/test.js');
			test.onload = function() {
				this.remove();
			};
			(document.body).appendChild(test);
		}
	}, 10);
});
