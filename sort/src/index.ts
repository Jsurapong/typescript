import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CaractersCollection";
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XXaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(400);
linkedList.add(100);
linkedList.add(-999);
linkedList.add(-888);
linkedList.add(999);

linkedList.sort();
linkedList.print();
