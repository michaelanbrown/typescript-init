function getMoviesByDirector(director: string): Promise<string[]> {
    let  p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies: string[] = GetTitles(director);

            if(foundMovies.length > 0) {
                resolve(foundMovies);
            } else {
                reject('No movies found for that director,');
            }
        }, 2000);
    });
    return p;
}

console.log('Beginning search...'); //Performs 1st
getMoviesByDirector('George Lucas') //Performs 3rd
    .then(titles => {
        console.log(`Found titles: ${titles}`);
        return titles.length; //this is the resolve value therefor can automatically be used in the next then
    }, reason => {return 0; }) //passes to the next call to then below before it gets to the catch function. Now the catch function is only needed to catch any errors
    .then(numOfMovies => console.log(`Number of movies: ${numOfMovies}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search submitted...'); //Performs 2nd