Selenium.prototype.dotypeUser = function(locator){
	var username = "tjackson@learninghouse.com";
	this.doType(locator, username);
}
Selenium.prototype.dotypePassword = function(locator){
	var password = "Password1";
	this.doType(locator, password);
}