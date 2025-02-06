import Movie from "./interfaces-for-function-type-demo";

import GetAllMovies from "./declaring-and-using-interfaces";

interface Intentory<T> {
    getNewestItem: () => T; //no parameters and returns value of type T
    addItem: (newItem: T) => void; //type T parameter and returns void
    getAllItems: () => Array<T>; //returns array of whatever type is provided for T
}
let bookInventory: Inventory<Book>;

let allBooks: Array<Book> = bookInventory.getAllItems();

//-----------------------------------

class Catalog<T> implements Inventory<T> {
    private catalogItems = new Array<T>();
    addItem(newItem: T) {
        this.catalogItems.push(newItem);
    }
}
let bookCatalog = new Catalog<Book>();

//-----------------------------------

class Favorites<T> {
    private _items: Array<T> = new Array<T>();

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }
    find(title: string): T {
        return this._items.filter(item => item.title === title)[0]; //property title does not exist on type T, generic constraints can resolve this issue
    }
    printTitles(): void {
        this._items.forEach(item => console.log(item.title)); //property title does not exist on type T, generic constraints can resolve this issue
    }
}

let inventory: Array<Movie> = GetAllMovies();

let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFav: Movie = favoriteMovies.getFirst();

//-----------------------------------

let docs: Array<Documentary> = [
    new Documentary('Baseball', 1944, 'History'),
    new Documentary('In Pursuit of Flavor', 2022, 'Wine'),
    new Documentary('Gumbo', 2018, 'Food')
];

let favoriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach(doc => favoriteDocs.add(doc));

let firstDoc: Documentary = favoriteDocs.getFirst();

let favNums: Favorites<number> = new Favorites<number>();
[1, 3.14, 42].forEach(num => favNums.add(num));