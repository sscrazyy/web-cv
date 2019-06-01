const deepObject = {
  type: "person",
  person: {
    firstName: "John",
    lastName: "Doe",
    children: [
      {
        firstName: "Joe",
        lastName: "Doe"
      },
      {
        firstName: "Mary",
        lastName: "Doe"
      }
    ]
  }
};

function deepClone(source) {
  const clone = {};

  const keys = Object.keys(source);

  keys.forEach(element => {
    if (typeof source[element] === "object" && source[element]) {
      clone[element] = Array.isArray(source[element])
        ? source[element].map(elem => {
            return elem;
          })
        : deepClone(source[element]);
    } else {
      clone[element] = source[element];
    }
  });

  return clone;
}
