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


// adding tests::
test("check if the array's items should return an array with the same number of elements", (t) => {
    const result = checkTask(data, 2);
    //   console.log(result);
    t.equal(result.length, 5);
});
// checking if false changed to true:
test("check if updated checked element has changed", (t) => {
    const old = data.filter((item) => item.id === 2)[0].check;
    const result = checkTask(data);
    const newitem = result.filter((item) => item.id === 2)[0].check;
    t.notEqual(old, newitem);
});
// checking if true changed to false:
test("check if updated checked element has changed", (t) => {
    const old = data.filter((item) => item.id === 2)[0].check;
    const result = checkTask(data);
    const newitem = result.filter((item) => item.id === 2)[0].check;
    t.notEqual(old, newitem);
});

// check if id not exist::

test("check if id not found", (t) => {
    const old = JSON.stringify(data);
    const result = JSON.stringify(checkTask(data, 6));
    t.equal(old, result);
});

// testing deleteItem() checkDelete()
test("testing ", t => {
    let result = deleteItem(2);
    console.log(result)
    t.equal(result.length, 3);
    result = deleteItem(9);
    t.equal(result.length, undefined);
});

test("testing ", t => {
    const result = deleteItem(2);
    t.equal(result.length, 2);
});

test("testing ", t => {
    const result = deleteItem(2);
    t.checkDelete(result, 1);
    t.checkDelete(result, 2);
});

