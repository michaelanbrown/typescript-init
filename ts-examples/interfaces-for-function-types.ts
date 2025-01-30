function CreateMovieID(name: string, id: number): string {
    return name + id;
}

let IDGenerator: (chars: string, nums: number) => string;
IDGenerator = CreateMovieID;

// This gives a resuable name to a function type that has the signature we're using, string and number parameters, and a string return type.
//Notice the function's signature is specified inside curly braces like other interfaces, but the syntax i slightly different from the function type edeclaration for the IDGenerator variable (colon used instead of arrow).
interface StringGenerator {
    (chars: string, nums: number): string;
}

//Now that we have the interface we can do this:
let IDGenerator: StringGenerator;
IDGenerator = CreateMovieID;