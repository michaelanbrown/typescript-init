import Documentaries from "./abstract-classes";

abstract class Vids {

    private _producer: string = '';
    static medium: string = 'Audio/Visual'; //static properties are only available on the class, not instances

    get producer(): string { //specifying the type is optional
        return this._producer.toUpperCase();
    }

    set producer(newProducer: string) { // Must not specify a type for the setter itself
        this._producer = newProducer;
    }

    constructor(public title: string, protected year: number) { //members declared with protected are also available in subclasses
        console.log('Creating a new Video...');
    }
    printItem(): void {
        console.log(`${this.title} was released in ${this.year}.`);
        console.log(`Medium: ${Video.medium}`);
    }
    abstract printCredits(): void;
}

export default class Docs extends Vids {

    constructor(newTitle: string, newYear: number, public subject: string) {
        super(newTitle, newYear);
    }

    @logMethodInfo //ADD DECORATOR HERE
    printItem(): void {
        super.printItem(); //Don't need to call this method if you don't want the super's printItems method included
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
    printCredits(): void {
        console.log(`Producer: ${this.producer}`);
    }
}

let sportsDoc: Documentaries = new Documentaries('Baseball', 1994, 'History');
sportsDoc.printItem();

export function logMethodInfo(origMethod: any, _context: ClassMethodDecoratorContext) {
    function replacementMethod(this: any, ...args: any[]) {

        console.log(`Decorated construct: ${_context.kind}`); //kind of construct which the decoartor was applied to
        console.log(`Decorated construct name: ${_context.name as string}`); //name of construct which the decoartor was applied to

        const result = origMethod.call(this, ...args); //calling original function
        return result;
    }
    return replacementMethod;
}