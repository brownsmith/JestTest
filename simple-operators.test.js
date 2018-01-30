function addStuffUp(...args) {

  var argumentArray = [];
  argumentArray.push(arguments[0], arguments[1], arguments[2]);
  
  var total = 0;

  for (arg in argumentArray) {
    var num = parseFloat(argumentArray[arg]);
    num = (!num || num > 1000) ? 0 : num && (num < 0) ? (function(){throw 'negatives not allowed ' + num}()) : num;
    total += num;
  }

  return total;
};

it('should allow arguments', () => {
  const addStuffUpFunc = addStuffUp(123);
  expect(addStuffUpFunc).toEqual(123);
});

it('for an empty string it should return 0', () => {
  const addStuffUpFunc = addStuffUp();
  expect(addStuffUpFunc).toBe(0);
});

it('should add the arguments together', () => {
  const addStuffUpFunc = addStuffUp(1, 2, 3);
  expect(addStuffUpFunc).toEqual(6);
});

it('should be called with no more than 3 arguments', () => {
  const addStuffUpFunc = addStuffUp(1, 2, 3, 4);
  expect(addStuffUpFunc).toEqual(6);
});

it('should be able to handle an unknown number of numbers', () => {
  const addStuffUpFunc = addStuffUp(1, 2, 3, 5, 8, 13, 21);
  expect(addStuffUpFunc).toEqual(6);
});

it('negative numbers will throw an exception \'negatives not allowed\' and the negative that was passed' , () => {
  expect(() => {
    addStuffUp(1, -2, 3);
  }).toThrow('negatives not allowed -2');
});

it('should ignore a number greater than 1000, so 2 + 1002 = 2', () => {
  const addStuffUpFunc = addStuffUp(1, 1002, 3);
  expect(addStuffUpFunc).toEqual(4);
});
