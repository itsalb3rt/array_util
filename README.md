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
- [arrayToCSV](#array-to-csv)
- [countOccurrences](#countOccurrences)
- [filterNonUniqueBy](#Occurrences)
- [filterNonUnique](#filterNonUnique)
- [intersection](#intersection)
- [intersectionBy](#intersectionBy)
- [isSorted](#isSorted)
- [join](#join)
- [last](#last)
- [longestItem](#longestItem)
- [reducedFilter](#reducedFilter)
- [similarity](#similarity)
- [symmetricDifference](#symmetricDifference)
- [uniqueElements](#uniqueElements)
- [uniqueElementsBy](#uniqueElementsBy)

### Ejemplos:
**<a name="array-to-csv">arrayToCSV</a>**
```javascript
util.arrayToCSV([['a', 'b'], ['c', 'd']]);
//out
"a","b"
"c","d"
```
**<a name="countOccurrences">countOccurrences</a>**
```javascript
util.countOccurrences(['foo', 'bar', 'loremp', 'mesa', 'foo', 'foo', 'any', 'foo'], 'foo');
util.countOccurrences([1, 1, 2, 1, 2, 3], 1);
//out
4
3
```

**<a name="filterNonUniqueBy">filterNonUniqueBy</a>**

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
**<a name="filterNonUnique">filterNonUnique</a>**
```javascript
util.filterNonUnique([1, 1, 2, 1, 2, 3]);
util.filterNonUnique(['foo', 'bar', 'loremp', 'mesa', 'foo', 'foo', 'any', 'foo']);
//out
[3]
 ["bar", "loremp", "mesa", "any"]
```

**<a name="intersection">intersection</a>**
```javascript
util.intersection([1, 2, 3], [4, 3, 2]);
//out
[2, 3]
```
**<a name="intersectionBy">intersectionBy</a>**
```javascript
util.intersectionBy([1, 2, 3], [4, 3, 2], Math.floor);
//out
[2, 3]
```
**<a name="isSorted">isSorted</a>**
```javascript
util.isSorted([0, 1, 2, 2]); 
util.isSorted([4, 3, 2]); 
util.isSorted([4, 3, 5]);
//out
1   //asc
-1 //desc
0  //no sorted
```
**<a name="join">join</a>**
```javascript
util.join(['pen', 'pineapple', 'apple', 'pen'], ',', '&');
util.join(['pen', 'pineapple', 'apple', 'pen'], ','); 
util.join(['pen', 'pineapple', 'apple', 'pen']); 
//out
pen,pineapple,apple&pen
pen,pineapple,apple,pen
pen,pineapple,apple,pen
```
**<a name="last">last</a>**
```javascript
util.last(['foo', 'bar', 'loremp', 'mesa', 'foo', 'foo', 'any', 'foo']);
//out
foo
```
**<a name="longestItem">longestItem</a>**
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

**<a name="reducedFilter">reducedFilter</a>**
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
**<a name="similarity">similarity</a>**
```javascript
util.similarity(['any', 'bar', 'foo'], ['foo', 'loremp', 'ipsu']);
//out
["foo"]
```

**<a name="symmetricDifference">symmetricDifference</a>**
```javascript
util.symmetricDifference([1, 2, 3], [1, 2, 4]);
util.symmetricDifference([1, 2, 2], [1, 3, 1]);
//out
[3, 4]
[2, 2, 3]
```

**<a name="uniqueElements">uniqueElements</a>**
```javascript
util.uniqueElements([1, 2, 2, 3, 4, 4, 5]);
util.uniqueElements(['foo', 'bar', 'any', 'foo', 'foo']);
//out
[1, 2, 3, 4, 5]
["foo", "bar", "any"]

```
**<a name="uniqueElementsBy">uniqueElementsBy</a>**
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
