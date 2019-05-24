const deepObject = {
    type: 'person',
    person: {
      firstName: 'John',
      lastName: 'Doe',
      children: [
        {
          firstName: 'Joe',
          lastName: 'Doe',
        },
        {
          firstName: 'Mary',
          lastName: 'Doe',
        }
      ]
    }
  }

  function deepClone(source) {
    var clone = {};
    for (var property in source) {
	if (!source.hasOwnProperty(property)) continue;
        
	if (typeof source[property] == "object" && source[property]) {
    // !Array.isArray(source[property])
    clone[property] = deepClone(source[property]);
  } else {
    clone[property] = source[property];
  }
    }
    return clone;
}