// Adds right click command to assert, verify etc the selected label of a select element in a form
CommandBuilders.add('accessor', function(window) {
	// Define the command that we will return
	var result = { accessor: "selectOptions", disabled: true };
	
	// Determine if the user has clicked on a select tag
	var element = this.getRecorder(window).clickedElement;
	if (element && element.tagName && 'select' == element.tagName.toLowerCase()) {
	
		// The target is the select element
		result.target = this.getRecorder(window).locatorBuilders.build(element);
		result.disabled = false;

		// Make a comma separated string array out of the options    	
	 	var selectOptions = '';
	 	var isFirst = true;
	    for (var i = 0; i < element.options.length; i++) {
	    	if (! isFirst) {
	    	    selectOptions = selectOptions + ',';
	    	 }
    	    isFirst = false;
    	    selectOptions = selectOptions +  element.options[i].text;
    	}
    	result.value = selectOptions;
	}

	return result;
});