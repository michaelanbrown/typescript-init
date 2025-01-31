
class Videos {

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
}

class Documentaries extends Videos {

    constructor(newTitle: string, newYear: number, public subject: string) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem(); //Don't need to call this method if you don't want the super's printItems method included
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
}

let vid1: Videos = new Videos('A New Hope', 1977);
//or can be let video = new Vid('A New Hope', 1977);
vid1.printItem();
vid1.producer = 'Sci-Fi Pictures';
console.log(video.producer);

let vid2 = new Documentaries('The History of Movies', 2024, 'film history'); // needs 2 arguments because it must call parents's constructor
vid2.printItem();

