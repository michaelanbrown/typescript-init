// The string and number parameters define the type of the function
function CreateMovieId(name: string, id: number): string {
    return name + id;
}

//Want to assign this function to a variable and use the variable to call it
let x: number;
x = 5;

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => name + id;

let newID: string = IdGenerator('jedi', 20);
console.log(newID); //jedi20
