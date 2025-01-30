interface Librarian {
    doWork: () => void;
}

class ElementarySchoolLibrarian implements Librarian {
    doWork() {
        console.log('Reading to and teaching children...');
    }
}

//This means that the object assigned to it must implement the Librarian interface
let kidsLibrarian: Librarian = new ElementarySchoolLibrarian();
kidsLibrarian.doWork();

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

class Performer implements CastMember {
    name: string = "";
    email: string = "";
    role: string = "";

    rehearse(sceneNumber: number): void {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}.`)
    }
}

let favoriteCastMember: CastMember = new Performer();
favoriteCastMember.name = 'Daisy';
favoriteCastMember.rehearse(25);
