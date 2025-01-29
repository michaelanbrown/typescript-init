//Optional Example:

function PrintMovieInfo(title: string, yearReleased?: number) {
    console.log(`Title: ${title}`);

    if(yearReleased) {
        console.log(`Year Released: ${yearReleased}`);
    }
}

PrintMovieInfo('A New Hope', 1977);


//Default Example:

function PrintMovieInfoDefault(title: string, yearReleased: number = 2024) {
    console.log(`Title: ${title}`);
    console.log(`Year Released: ${yearReleased}`);

}

PrintMovieInfoDefault('A New Hope', 1977);
PrintMovieInfoDefault('A New Hope');

//Rest Parameter Example:

function PrintMovieInfoRest(title: string, yearReleased: number, ...cast: string[]) {
    console.log(`Title: ${title}`);
    console.log(`Year Released: ${yearReleased}`);
    console.log('Cast:');

    for (const name of cast) {
        console.log(`  ${name}`);
    }
}

PrintMovieInfoRest('A New Hope', 1977, 'Carrie', 'Mark', 'Harrison')