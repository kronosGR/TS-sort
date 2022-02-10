import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([150, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('Xaayb');
const sorterC = new Sorter(characterCollection);
sorterC.sort();
console.log(characterCollection.data)
