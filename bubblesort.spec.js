describe("Bubble Sort", function () {
  let array = [2, 15, 3, 9, 7, 8];
  let returnedArray = [2, 3, 7, 8, 9, 15];
  //   beforeAll(function () {
  //     spyOn(swap, "swap").and.callThrough();
  //   });
  xit("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  xit("the length of returnedArray is the same as the array", function () {
    expect(bubbleSort(array).length).toEqual(array.length);
  });
  xit("it returns a sorted array", function () {
    expect(bubbleSort(array)).toEqual(returnedArray);
  });
});
