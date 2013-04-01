Selenium.prototype.doTypeLastYear = function(locator){
    var dates = new Date();
    var day = dates.getDate();
    if (day < 10){
        day = '0' + day;
    }
    month = dates.getMonth() + 1;
    if (month < 10){
        month = '0' + month;
    }
    var year = dates.getFullYear()-1;
    var prettyDay = month + '/' + day + '/' + year;
    this.doType(locator, prettyDay);
}