```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->
![memory representation] ('./memoryRepresentation.jpg');

2. Answer the following with reason:

- `user == newUser;` // true as it holds the same address
- `user === newUser;`// true as it holds the same address
- `user.name === newUser.name;`// true as it holds the same address.
- `user.name == newUser.name;`// true as it holds the same addess
- `user.sibling == newUser.sibling;`// true as it holds the same adress and address contains the same value.
- `user.sibling === newUser.sibling;`// true as it holds the same adress and address contains the same value.
- `user.sibling == allBrothers;`// false as it holds different address as they are non primitive
- `user.sibling === allBrothers;`// false as it holds different address as they are non primitive
- `brothersCopy === allBrothers;`// false as it holds different address as they are non primitive
- `brothersCopy == allBrothers;`// false as it holds different address as they are non primitive
- `brothersCopy == user.sibling;`// true as it holds the same adress and address contains the same value.
- `brothersCopy === user.sibling;`brothersCopy == user.sibling;
- `brothersCopy[0] === user.sibling[0];`// true
- `brothersCopy[1] === user.sibling[1];`// true
- `user.sibling[1] === newUser.sibling[1];`// true
