function addTodoItem(description){
    if(description !== null && description.length !== 0){
        data.push({
            id: lastId++,
            desc: description,
            check: false,
        })
    
        return data[data.length-1];
    }else{
        return 'Task description empty!';
    }
    
}

/*add tests..... */
test("Submitting a new task adds it to the list, valid task", t => {
    // test goes here
    const description = "hello from test 1";
    const newItem = addTodoItem(description);
    t.equal(newItem.id, lastId - 1);
    t.equal(newItem.desc, description);
    t.equal(newItem.check, false);
  });

  test("Submitting a new task adds, check the size of the todo list", t => {
    // test goes here
    const description = "hello from test 2";
    const todoListPrevSize = data.length;
    const newItem = addTodoItem(description);
    t.equal(data.length, todoListPrevSize+1);
    
  });

  test("Submitting a new task with empy description", t => {
    // test goes here
    const description = "";
    const newItem = addTodoItem(description);
    t.equal(newItem, 'Task description empty!');
  });

  

  
function checkTask(array, id) {
  return array.forEach((value) => {
    if (value.id === id) {
      if (value.check == true) {
        value.check = false;
      } else {
        value.check = true;
      }
    }
    console.log("test ", value.check);
  });
}
checkTask(data, 2);
console.log(data);
