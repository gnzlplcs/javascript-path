# programming grammar

## statements

a program is made up of a series of statements

```plain
store response to 'Please enter your name' as name
print name to screen
```

in JavaScript this would be

```jsx
const name = prompt('Please enter your name');
alert(name)
```

## blocks

it’s a series of statements that are collected together.

programming languages have various ways to collect statements inside blocks. some do it by using keywords to signify the start and end of blocks, while others use indentation.

JavaScript uses curly braces to enclose a block of code.

```jsx
{
  // this is a block containing a comment and two statements
  const name = prompt('Please enter your name.');
  alert(message);
}
```

## data types

every value has a type that describes the data it contains.

this determines how the language will interpret and use the value.

### primitive data types

| data type | explanation |
| --- | --- |
| character | a single character such as letters, number or symbols: `s`, `2`, `@` |
| string | a collection of characters inside quote marks: `'hello'`, `‘123!’` |
| integer | a whole number that can positive or negative: `21`, `-21` |
| float | numbers with a fractional part, such as: `2.5`, `3.14159`, `-7.0` |
| boolean | a boolean value can either be `true` or `false` |

JS doesn’t have a char primitive data type.

JS doesn’t differentiate between integers and floats either. it just has a single primitive data type type of `Number`.

### composite data types

these are made up, or composed, of primitive data types in a structured format.

JS has two main composite data type: *arrays* and *objects*.
