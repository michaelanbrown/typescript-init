class ReferenceItem {
    constructor(title: string, publisher?:string) {
    }
}

let encyclopedia = new ReferenceItem('WorldPedia', 'WorldPub');



class RefItem {
    numberOfPages: number;
    get editor(): string {

    }
    set editor(newEditor: string) {

    }
    printChapterTitle(chapterNum: number): void {

    }
}



class Author {
    name: string;
    constructor(authorName: string) {
        name = authorName;
    }
}

// same as

class Author {
    constructor(public name: string) {}
}

// -----------STATIC PROPERTIES-------------------

class Library {
    constructor(public name: string) {
        static description: string = 'A source of knowledge,'; // Only available of class and not on instances of class
    }
}

let lib = new Library('New York Public Library');
let name = lib.name //available on instances of the class
let desc = Library.description // available on the class

// -----------ACCESS MODIFIERS-------------------

