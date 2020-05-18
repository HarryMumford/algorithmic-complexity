# Task

Given a list of students, and a target number of groups,
create an algorithm to assign students into the right number of groups,
of equivalent sizes (groups cannot have more than one person difference).

## Inputs and outputs

```
['Ruby'], 1 => [['Ruby']]
['Bob', 'Ruby'], 1 => [['Bob', 'Ruby']]
['Bob', 'Ruby'], 2 => [['Bob'], ['Ruby']]
['Bob', 'Ruby', 'Ben'], 3 => [['Bob'], ['Ruby'], ['Ben']]
['Bob', 'Ruby', 'Ben', 'Jess'], 2 => [['Bob', 'Ruby'], ['Ben', 'Jess']]
['Bob', 'Ruby', 'Ben'], 2 => [['Bob', 'Ruby'], ['Ben']]
['Bob', 'Ruby', 'Ben'], 2 => [['Bob', 'Ruby'], ['Ben']]
['Bob', 'Ruby', 'Ben', 'Jess', 'Cam'], 4 => [['Bob', 'Ruby'], ['Ben'], ['Jess'], ['Cam']]
```

### Edge cases

* Empty array
```
[], 0 => []
```

* More groups than students
```
['Bob'], 2 => [['Bob'], []]
```

* Empty str
```
[''], 1 => [['']]
```

### Function signature

allocateGroups(students, numberOfGroups)

students = array of strings
numberOfGroups = positive integer

### How to solve in real life?

like dealing hands when playing a card game. The dealer will deal names of people into a desired number of groups

### Steps

1. Allocated number of specified arrays
1. Insert 1 name into 1 array
2. Is there another array available?
   1. No? insert next name into same array
   2. Yes? insert next name into next array
3. Repeat step 2 until all names have run out

### Steps with code

1. Allocated number of specified arrays
```
var output = [[],[],[]] //(3 groups)
```
2. Insert 1 name into 1 array
```
output[0].push(students[0])
```
3. Is there another array available?
   1. No? insert next name into same array
```
output.push(students[1].push(students[0]))
```
   2. Yes? insert next name into next array
```
output.push(students[1].push(students[1]))
```
1. Repeat step 2 until all names have run out


