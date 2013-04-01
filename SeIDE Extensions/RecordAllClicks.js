Recorder.removeEventHandler('clickLocator');
Recorder.addEventHandler('clickLocator', 'click', function(event) {
		if (event.button == 0) {
			var clickable = this.findClickableElement(event.target);
			if (clickable) {
                // prepend any required mouseovers. These are defined as
                // handlers that set the "mouseoverLocator" attribute of the
                // interacted element to the locator that is to be used for the
                // mouseover command. For example:
                //
                // Recorder.addEventHandler('mouseoverLocator', 'mouseover', function(event) {
                //     var target = event.target;
                //     if (target.id == 'mmlink0') {
                //         this.mouseoverLocator = 'img' + target._itemRef;
                //     }
                //     else if (target.id.match(/^mmlink\d+$/)) {
                //         this.mouseoverLocator = 'lnk' + target._itemRef;
                //     }
                // }, { alwaysRecord: true, capture: true });
                //
                if (this.mouseoverLocator) {
                    this.record('mouseOver', this.mouseoverLocator, '');
                    delete this.mouseoverLocator;
                }
            }
			this.record("click", this.findLocators(event.target), '');
		}
	}, { capture: true });