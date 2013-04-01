Selenium.prototype.doTypeRandomFirstName = function(locator){
    var dates = new Date();
    var day = Math.floor((Math.random()*30)+1);
    if (day < 10){
        day = '0' + day;
    }
    var month = Math.floor((Math.random()*12)+1);;
    if (month < 10){
        month = '0' + month;
    }
    var year = Math.floor((Math.random()*90)+1900);;
    var prettyDay = month + '/' + day + '/' + year;
    this.doType(locator, prettyDay);
}