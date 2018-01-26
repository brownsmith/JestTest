// http://osherove.com/tdd-kata-1/
// yarn test in JestTest

function addStuffUp(arg1, arg2, arg3) {
  if (arguments.length > 3) {
    return false;
  }

  var total = 0;
  for (arg in arguments) {
    num = parseFloat(arguments[arg]);
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments - if args are numbers