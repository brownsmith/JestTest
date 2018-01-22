// http://osherove.com/tdd-kata-1/
// yarn test in JestTest

function addStuffUp(arg1) {
  return arg1 === undefined ? 0 : arg1;
};

it('should allow arguments', () => {
  const addStuffUpFunc = addStuffUp(123);
  expect(addStuffUpFunc).toBe(123);
});

it('for an empty string it should return 0', () => {
  const addStuffUpFunc = addStuffUp();
  expect(addStuffUpFunc).toBe(0);
});
