//Decalre both versions and the overload function:
// 
// // Two versions of the same function that differ in the parameters they get
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
// Version of function that handles both with the any parameter type
function GetTitles(bookProperty: any): string[] {
    if (typeof bookProperty == 'string') {
        // get books by author, add to foundTitles
    } else if (typeof bookProperty == 'boolean') {
            // get books by availability, add to foundTitles
    }
    return foundTitles;
}


// ---------------------------------------------------------------------------

// function GetAllMovies() {
//     return [
//         {title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
//         {title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true},
//         {title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true},
//         {title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false},
//         {title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true},
//         {title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true},
//     ];
// }

function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}

function PrintMoveInfo(title: string, yearReleased: number, ...cast: string[]) {
    console.log(`Title ${title}`);
    console.log(`Year Released: ${yearReleased}`);
    console.log(`Cast:`);

    for (const name of cast) {
        console.log(`  ${name}`);
    }
}

//Overloaded function:
function GetTitles(director: string): string[];
function GetTitles(director: string, streaming: boolean): string[];
function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = GetAllMovies();
    const searchResults: string[] = [];

    if (streaming !== undefined) {
        for(let movie of allMovies) {
            if(movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    } else {
        for(let movie of allMovies) {
            if(movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}

// Movies directed by George Lucas: 
let movies: string[] = GetTitles('George Lucas');
movies.forEach(title => console.log(title));

// Movies directed by George Lucas that are not streaming: 
let movies: string[] = GetTitles('George Lucas', false);
movies.forEach(title => console.log(title));

// Movies directed by George Lucas that are streaming: 
let movies: string[] = GetTitles('George Lucas', true);
movies.forEach(title => console.log(title));