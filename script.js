// checktest::
function checkTask(array, id) {
  array.forEach((value) => {
    if (value.id === id) {
      //   value.check = !value.check;
      if (value.check == true) {
        value.check = false;
      } else {
        value.check = true;
      }
    }
  });

  return array;
}

// adding tests::
test("check if the array's items should return an array with the same number of elements", (t) => {
  const result = checkTask(data, 2);
  //   console.log(result);
  t.equal(result.length, 5);
});
// checking if false changed to true:
test("check if updated checked element has changed", (t) => {
  const old = data.filter((item) => item.id === 2)[0].check;
  const result = checkTask(data, 2);
  const newitem = result.filter((item) => item.id === 2)[0].check;
  t.notEqual(old, newitem);
});
// checking if true changed to false:
test("check if updated checked element has changed", (t) => {
  const old = data.filter((item) => item.id === 2)[0].check;
  const result = checkTask(data, 2);
  const newitem = result.filter((item) => item.id === 2)[0].check;
  t.notEqual(old, newitem);
});

// check if id not exist::

test("check if id not found", (t) => {
  const old = JSON.stringify(data);
  const result = JSON.stringify(checkTask(data, 6));
  t.equal(old, result);
});
