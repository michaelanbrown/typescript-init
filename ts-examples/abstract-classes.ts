
abstract class Videos {

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

class Documentaries extends Videos {

    constructor(newTitle: string, newYear: number, public subject: string) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem(); //Don't need to call this method if you don't want the super's printItems method included
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
    printCredits(): void {
        console.log(`Producer: ${this.producer}`);
    }
}

// Cannot create new Videos instances because Videos is abstract

let vid2: Videos = new Documentaries('The History of Movies', 2024, 'film history'); // needs 2 arguments because it must call parents's constructor
// Don't need to declare the Videos class
vid2.producer = 'Sci-Fi Pictures'
vid2.printCredits();



//Class expressions
let Musical = class extends Video {
    printCredits(): void {
        console.log(`Musical credits: ${this.producer}`);
    }
}

let myMusical = new Musical('Grease', 1978)
myMusical.producer = 'Sing-Song Pictures';
myMusical.printCredits();

class Course extends class { title: string = '';} {
    subject: string = '';
}

let myCourse = new Course();