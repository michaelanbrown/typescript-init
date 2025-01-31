class Video {

    private _producer: string = '';
    static medium: string = 'Audio/Visual'; //static properties are only available on the class, not instances

    get producer(): string { //specifying the type is optional
        return this._producer.toUpperCase();
    }

    set producer(newProducer: string) { // Must not specify a type for the setter itself
        this._producer = newProducer;
    }

    constructor(public title: string, private year: number) {
        console.log('Creating a new Video...');
    }
    printItem(): void {
        console.log(`${this.title} was released in ${this.year}.`);
        console.log(`Medium: ${Video.medium}`);
    }
}

let vid: Video = new Video('A New Hope', 1977);
//or can be let vid = new Video('A New Hope', 1977);
vid.printItem();
vid.producer = 'Sci-Fi Pictures';
console.log(vid.producer);