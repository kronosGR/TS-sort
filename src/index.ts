import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([150, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-500);
linkedList.add(50);
linkedList.add(-2);

linkedList.sort();
linkedList.print()

