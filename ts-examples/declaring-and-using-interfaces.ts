interface Movie {
    title: string,
    director: string,
    yearReleased: number,
    streaming: boolean,
    length?: number, //optional
    logReview?: (review: string) => void,
}

//Now that the movie interface is declared in the function below, every object in the array must have the properties declared in the above interface.
function GetAllMovies(): Movie[] {
    return [
        {title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
        {title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true},
        {title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true},
        {title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false},
        {title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true},
        {title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true},
    ];
}

function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}

//Declaring this with the Movie interface
function PrintMovieInfo(movie: Movie) {
    console.log(`Title ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`)
    console.log(`Cast:`);
}

let myMovie = {
    title: 'Rogue One', //in Movie interface
    director: 'Gareth Edwards', //in Movie interface
    yearReleased: 2016, //in Movie interface
    streaming: true, //in Movie interface
    genre: 'Sci-fi', //additional property
    previouslyViewed: true //additional property
}

//Now that the movie interface is declared, we cannot have extra parameters
let myDeclaredMovie: Movie = {
    title: 'Rogue One', //in Movie interface
    director: 'Gareth Edwards', //in Movie interface
    yearReleased: 2016, //in Movie interface
    streaming: true, //in Movie interface
    length: 133,
    logReview: (review: string) => console.log(`Review ${review}`)
}

PrintMovieInfo(myMovie); //No error messages - duck typing. Even though myMovie isn't declared with the Movie interface, it has all of the required properties that the Movie interface has so it can be used.


// We need to use an if statement to use optional methods because since it is optional, if it is not present then it will throw an error.
if (myDeclaredMovie.logReview) {
    myDeclaredMovie.logReview('Great story!')
}