chrome.app.runtime.onLaunched.addListener(function(input) {
	// If there is no window then create one.
	if (chrome.app.window.getAll().length === 0) {
		chrome.app.window.create('index.html', {
			bounds: {
				width: 550,
				height: 550
			},
			resizable: false
		}, function() {
			if (input && input.hasOwnProperty(items) && input.items[0]) {
				// Leave a reference to the input file entry so that the
				// new window can pick it up after it has loaded.
				window.inputFileEntry = input.items[0].entry
			}
		})
	}
})
