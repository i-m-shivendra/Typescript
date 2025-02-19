enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

function checkSeason(month: Months): void {
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

const month: Months = Months.August;
checkSeason(month);
