# array.extension
The array.extension extends native Array object

npm
https://www.npmjs.com/package/array.extension

# environment
typescript

# build
```
yarn build
```

# install
```
npm i array.extension
```

# use
```
import 'array.extension'
```

# method

## Array
#### uniq<T>(comparer): T[]
uniq<T> methods eliminates duplicated item in array by comparer function.

example
```
1. array of string
['first', 'second', 'third', 'first'].uniq<string>((v1, v2) => v1 === v2)
==> ['first', 'second', 'third']

2. array of object
[{name: 'first'} , {name: 'second'}, {name: 'third'}, {name: 'first'}].uniq<Object>((v1, v2) => v1.name === v2.name)
==> [{name: 'first'} , {name: 'second'}, {name: 'third'}
```


#### contains<T>(value: T): boolean
return true if *value* contains in the array, otherwise false.

```
['first', 'second', 'third'].contains<string>('first') ===> true
['first', 'second', 'third'].contains<string>('fourth') ===> false
```

## Object
#### has(key: string): boolean
return true if object has specfied key

```
{key1: 'value1', key2: 'value2'}.has('key1') ===> true
{key1: 'value1', key2: 'value2'}.has('key3') ===> false
```

#### filterKeys(attributes: string[]): Object
return filtered object which removes elements that specfied arguments

```
{key1: 'value1', key2: 'value2', key3: 'value3'}.filterKeys(['key2','key3']) ===> {key1: 'value1'}
```
#### indexed(): IndexObject
return object as indexed

```
let indexed = {key1: 'value1', key2: 'value2', key3: 'value3'}.indexed()
indexed['key4'] = 'value4'
```

IndexObject
```
interface IndexObject {
  [index: string]: any
}
```

# declaration merging (typescript docs)
https://www.typescriptlang.org/docs/handbook/declaration-merging.html