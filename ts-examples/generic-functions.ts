import GetAllMovies from "./declaring-and-using-interfaces";
import Movie from "./interfaces-for-function-type-demo";
//Can specify that the type provided for T when the function is called should also be used elsewhere in the function by using the same T placeholder
//Want the function to accept a parameter that will be of the type specified by the type parameter, so have listed the type of the function parameter as T
//Also want the function to return a value of type T
//Can also use T inside the function to declare variables or do anything else that requires a type annotation (not doing that here)
function LogAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}
let someString: string = LogAndReturn<string>('log this');
let newNum: number = 4;
let someNum: number = LogAndReturn<number>(newNum);

//-------EXAMPLE-----------
export function Purge<T>(inventory: Array<T>): Array<T> {
    //implement some fancy business logic
    //return the purged items
    return inventory.splice(3, inventory.length);
}

let inventory: Array<Movie> = GetAllMovies();

let purgedMovies: Array<Movie> = Purge<Movie>{inventory};

purgedMovies.forEach(movie => console.log(movie.title));

let purgedNums: Array<number> = Purge<number>([1,2,3,4,5]);
console.log(purgedNums);