//Optional Example:
function PrintMovieInfo(title, yearReleased) {
    console.log("Title: ".concat(title));
    if (yearReleased) {
        console.log("Year Released: ".concat(yearReleased));
    }
}
PrintMovieInfo('A New Hope', 1977);
//Default Example:
function PrintMovieInfoDefault(title, yearReleased) {
    if (yearReleased === void 0) { yearReleased = 2024; }
    console.log("Title: ".concat(title));
    console.log("Year Released: ".concat(yearReleased));
}
PrintMovieInfoDefault('A New Hope', 1977);
PrintMovieInfoDefault('A New Hope');
//Rest Parameter Example:
function PrintMovieInfoRest(title, yearReleased) {
    var cast = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        cast[_i - 2] = arguments[_i];
    }
    console.log("Title: ".concat(title));
    console.log("Year Released: ".concat(yearReleased));
    console.log('Cast:');
    for (var _a = 0, cast_1 = cast; _a < cast_1.length; _a++) {
        var name_1 = cast_1[_a];
        console.log("  ".concat(name_1));
    }
}
PrintMovieInfoRest('A New Hope', 1977, 'Carrie', 'Mark', 'Harrison');
PrintMovieInfoRest('A New Hope', 1977);
