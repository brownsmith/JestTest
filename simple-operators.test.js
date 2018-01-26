function addStuffUp(arg1, arg2, arg3) {
  if (arguments.length > 3) {
    return false;
  }

  var total = 0;
  for (arg in arguments) {
    num = parseFloat(arguments[arg]);
    if (num < 0) {
      throw 'negatives not allowed ' + num;
    }
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
  expect(addStuffUpFunc).toEqual(false);
});

it('should be able to handle an unknown number of numbers', () => {
  const addStuffUpFunc = addStuffUp(1, 2, 3, 5, 8, 13, 21);
  expect(addStuffUpFunc).toEqual(false);
});

it('negative numbers will throw an exception \'negatives not allowed\' and the negative that was passed' , () => {
  expect(() => {
    addStuffUp(1, -2, 3);
  }).toThrow('negatives not allowed -2');
});
