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
