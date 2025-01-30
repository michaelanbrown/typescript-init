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