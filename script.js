// checktest::
function addTodoItem(description) {
  if (description !== null && description.length !== 0) {
    data.push({
      id: lastId++,
      desc: description,
      check: false,
    });

    return data[data.length - 1];
  } else {
    return "Task description empty!";
  }
}

/*add tests..... */
test("Submitting a new task adds it to the list, valid task", (t) => {
  // test goes here
  const description = "hello from test 1";
  const newItem = addTodoItem(description);
  t.equal(newItem.id, lastId - 1);
  t.equal(newItem.desc, description);
  t.equal(newItem.check, false);
});

test("Submitting a new task adds, check the size of the todo list", (t) => {
  // test goes here
  const description = "hello from test 2";
  const todoListPrevSize = data.length;
  const newItem = addTodoItem(description);
  t.equal(data.length, todoListPrevSize + 1);
});

test("Submitting a new task with empy description", (t) => {
  // test goes here
  const description = "";
  const newItem = addTodoItem(description);
  t.equal(newItem, "Task description empty!");
});

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
