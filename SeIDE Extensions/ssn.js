Selenium.prototype.doStoreFourDigits = function(locator){
var digits = Math.floor((Math.random()*8999)+1000);
this.doStore(digits, locator);
}

