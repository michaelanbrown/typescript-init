let poetryBooks:Book[];

//All this does is specify a type for the new variable vv
//The type parameter is part of the type
//It declares that the fictionBooks variable will be an array that can only contain books
let fictionBooks: Array<Book>

//Array that contains five elements vv
//TypeScript will use type inference to determine the type of the new variable
//Type parameters are listed separate from the function parameters
let historyBooks = new Array<Book>(5);