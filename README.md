# ArrayUtil
Clase utilitario con algunos metodospara el tratamiento de arreglos con JavaScript

### Uso basico;

Se agrega la clase;
```html
<script src="js/arrayUtil.js"></script>
```
Instancia de la clase y estará listo para usarla;
```javascript
let util = new ArrayUtil();
```

### Metodos:
- arrayToCSV
- countOccurrences
- filterNonUniqueBy
- filterNonUnique
- intersection
- intersectionBy
- isSorted
- join
- last
- longestItem
- reducedFilter
- similarity
- symmetricDifference
- uniqueElements
- uniqueElementsBy

### Ejemplos:
**arrayToCSV**
```javascript
util.arrayToCSV([['a', 'b'], ['c', 'd']]);
//out
"a","b"
"c","d"
```
**filterNonUniqueBy**

```javascript
let data = [
            { id: 0, value: 'a' },
            { id: 1, value: 'b' },
            { id: 2, value: 'c' },
            { id: 1, value: 'd' },
            { id: 0, value: 'e' }
        ];
util.filterNonUniqueBy(data, (a, b) => a.id == b.id);
//out
0: {id: 2, value: "c"};
```
**filterNonUnique**
```javascript
util.filterNonUnique([1, 1, 2, 1, 2, 3]);
util.filterNonUnique(['foo', 'bar', 'loremp', 'mesa', 'foo', 'foo', 'any', 'foo']);
//out
[3]
 ["bar", "loremp", "mesa", "any"]
```

**intersection**
```javascript
util.intersection([1, 2, 3], [4, 3, 2]);
//out
[2, 3]
```
**intersectionBy**
```javascript
util.intersectionBy([1, 2, 3], [4, 3, 2], Math.floor);
//out
[2, 3]
```
**isSorted**
```javascript
util.isSorted([0, 1, 2, 2]); 
util.isSorted([4, 3, 2]); 
util.isSorted([4, 3, 5]);
//out
1   //asc
-1 //desc
0  //no sorted
```
**join**
```javascript
util.join(['pen', 'pineapple', 'apple', 'pen'], ',', '&');
util.join(['pen', 'pineapple', 'apple', 'pen'], ','); 
util.join(['pen', 'pineapple', 'apple', 'pen']); 
//out
pen,pineapple,apple&pen
pen,pineapple,apple,pen
pen,pineapple,apple,pen
```
**last**
```javascript
util.last(['foo', 'bar', 'loremp', 'mesa', 'foo', 'foo', 'any', 'foo']);
//out
foo
```
**longestItem**
```javascript
util.longestItem('this', 'is', 'a', 'testcase');
util.longestItem(...['a', 'ab', 'abc']); 
util.longestItem(...['a', 'ab', 'abc'], 'abcd'); 
util.longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); 
util.longestItem([1, 2, 3], 'foobar'); 
//out
testcase
71 abc
72 abcd
[1, 2, 3, 4, 5]
foobar
```

**reducedFilter**
```javascript
const data = [
  {
    id: 1,
    name: 'albert',
    age: 24
  },
  {
    id: 2,
    name: 'giant',
    age: 50
  }
];
reducedFilter(data, ['id', 'name'], item => item.age > 24);
//out
 [{ id: 2, name: 'giant'}]
```
**similarity**
```javascript
util.similarity(['any', 'bar', 'foo'], ['foo', 'loremp', 'ipsu']);
//out
["foo"]
```

**symmetricDifference**
```javascript
util.symmetricDifference([1, 2, 3], [1, 2, 4]);
util.symmetricDifference([1, 2, 2], [1, 3, 1]);
//out
[3, 4]
[2, 2, 3]
```

**uniqueElements**
```javascript
console.log(util.uniqueElements([1, 2, 2, 3, 4, 4, 5]));
console.log(util.uniqueElements(['foo', 'bar', 'any', 'foo', 'foo']));
//out
[1, 2, 3, 4, 5]
["foo", "bar", "any"]

```
**uniqueElementsBy**
```javascript
let array = [
            { id: 0, value: 'a' },
            { id: 1, value: 'b' },
            { id: 2, value: 'c' },
            { id: 1, value: 'd' },
            { id: 0, value: 'e' }
];
result = util.uniqueElementsBy(array, (a, b) => a.id == b.id);
// out
[
	0: {id: 0, value: "a"}
	1: {id: 1, value: "b"}
	2: {id: 2, value: "c"}
];
```

### Creditos

Basado en [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code "30-seconds-of-code")  ♥
