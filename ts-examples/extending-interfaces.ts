interface LibraryResource {
    catalogNumber: number;
}

interface Book {
    title: string;
}

// Has properties defined on previous interfaces, and its own
interface Encyclopedia extends LibraryResource, Book {
    volume: number;
}

//Declaring a variable with the Encyclopedia type must have all three properties because none are optional
let refBook: Encyclopedia = {
    catalogNumber: 1234,
    title: 'The Book of Everything',
    volume: 1
}

//Demo:
interface Person {
    name: string;
    email: string;
}

interface Director extends Person {
    numMoviesDirected: number;
}

interface CastMember extends Person {
    role: string;
    rehearse: (sceneNumber: number) => void;
}

// let favoriteDirector: Director = {}

// let favoriteCastMember: CastMember = {}