import Inventory from "./generic-interfaces-and-classes";
import Movie from "./interfaces-for-function-type-demo";
import GetAllMovies from "./declaring-and-using-interfaces";

interface CatalogItem {
    catalogNumber: number;
}

//Generic constraints describe types that may be passed as a generic parameter
//Extends keyword applies constraint
//Only types satisfying the constraint may be used
class Catalog<T extends CatalogItem> implements Inventory<T> {
    // implement interface methods here
}

//------------------------------------------

interface FavoriteItem {
    title: string;
}

class Favorites<T extends FavoriteItem> {
    private _items: Array<T> = new Array<T>();

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }
    find(title: string): T {
        return this._items.filter(item => item.title === title)[0]; //generic constraints resolved this issue that property title does not exist on type T
    }
    printTitles(): void {
        this._items.forEach(item => console.log(item.title)); //generic constraints resolved this issue that property title does not exist on type T
    }
}

let inventory: Array<Movie> = GetAllMovies();

let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFav: Movie = favoriteMovies.getFirst();

let docs: Array<Documentary> = [
    new Documentary('Baseball', 1944, 'History'),
    new Documentary('In Pursuit of Flavor', 2022, 'Wine'),
    new Documentary('Gumbo', 2018, 'Food')
];

let favoriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach(doc => favoriteDocs.add(doc));

let firstDoc: Documentary = favoriteDocs.getFirst();

favoriteDocs.printTitles();

let originalMovie = favoriteMovies.find('A New Hope')
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);