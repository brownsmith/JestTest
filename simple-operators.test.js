// http://osherove.com/tdd-kata-1/
// yarn test in JestTest

function addStuffUp(arg1, arg2, arg3) {
  return ((arg1 === undefined ? 0 : arg1) + (arg2 === undefined ? 0 : arg2) + (arg3 === undefined ? 0 : arg3));
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments - if args are numbers