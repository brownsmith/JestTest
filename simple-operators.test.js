function addStuffUp(arg1) {
  return arg1;
};

it('should allow arguments', () => {
  const addStuffUpFunc = addStuffUp(123);
  expect(addStuffUpFunc).toEqual(123);
});
