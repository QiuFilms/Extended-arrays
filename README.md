
# Extended arrays functions

Project adds few new functions for arrays


## Features

- New functions for arrays
- Possiblity to create custom functions faster


## Deployment

To import functions use
```javascript
  import "./ExtendedArrays.js"
```


## Documentation

[Documentation](https://linktodocumentation)

## Available functions

| Function name             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| largest() | Returns largest number in array  |
| smallest()  | Returns smallest number in array |
| populate(length, random) | Fills array with numbers |
| average() | Returns average of numbers in array |
| repeats(element) | Returns the number of times a given item repeats in an array |
| getTypes() | Returns an object of the array elements along with their data types |
| indexOfAll() | Returns the indexes of all occurrences of the given item |
| toObject() | Return simple object created from array elements |
| pushString(string) | Adds string at the end of array |
| pushNumber(number) | Adds number at the end of array |
| print() | Prints array |
||
| defineProperty(name, callback) | Used to create custom function|



## Usage/Examples

```javascript
const baseArray = [1,2,3,6,5,4,2]

baseArray.largest()  // Returns 6
baseArray.largest().print()  //Prints 6 in console

baseArray.smallest()  // Returns 1
baseArray.smallest().print()  //Prints 1 in console

baseArray.populate(length, random) // length defies number of elements to create
                                   // random is boolean value to specify if element should be randomized
baseArray.populate().print()  //Prints returned value in console
baseArray.populate(5)  // Returns [ 0, 1, 2, 3, 4 ]
baseArray.populate(5, true)  // Returns randomized e.g. [ 51, 18, 40, 30, 46 ] 

baseArray.repeats(2)  // Returns 2

baseArray.getTypes() // Returns{
                     //   index0: [ 1, 'number' ],
                     //   index1: [ 2, 'number' ],
                     //   index2: [ 3, 'number' ],
                     //   index3: [ 6, 'number' ],
                     //   index4: [ 5, 'number' ],
                     //   index5: [ 4, 'number' ],
                     //   index6: [ 2, 'number' ]
                     // }

baseArray.indexOfAll(2)  // Returns [ 1, 6 ]
baseArray.indexOfAll(2).print()  // Returns [ 1, 6 ]

baseArray.toObject()  // Returns { key1: 1, 
                      // key2: 2, 
                      // key3: 3, 
                      // key4: 6, 
                      // key5: 5, 
                      // key6: 4, 
                      // key7: 2 
                      // }

baseArray.pushString(string)  // Adds string at the end of array 

baseArray.pushNumber(number)  // Adds number at the end of array

baseArray.print()  // Prints array
```
### Example for defineProperty()
```javascript
Array.defineProperty('printWithString', (string, thisArray) => {
    console.log(string, thisArray)
})

array.printWithString("Asd")  // Prints Asd [1, 2, 3, 6, 5, 4, 2]
```
## Contact

If you have any feedback, please write to qiufilms@gmail.com

