var Months;
(function (Months) {
    Months["January"] = "January";
    Months["February"] = "February";
    Months["March"] = "March";
    Months["April"] = "April";
    Months["May"] = "May";
    Months["June"] = "June";
    Months["July"] = "July";
    Months["August"] = "August";
    Months["September"] = "September";
    Months["October"] = "October";
    Months["November"] = "November";
    Months["December"] = "December";
})(Months || (Months = {}));
function checkSeason(month) {
    switch (month) {
        case Months.March:
        case Months.April:
        case Months.May:
            console.log("Yes! It is spring! , " + month);
            break;
        case Months.June:
        case Months.July:
        case Months.August:
            console.log("It's summer, who wants ice cream?! , " + month);
            break;
        case Months.September:
        case Months.October:
        case Months.November:
            console.log("I am enjoying autumn, aren't you? , " + month);
            break;
        default:
            console.log("It is very cold outside! It's winter , " + month);
    }
}
var month = Months.August;
checkSeason(month);
