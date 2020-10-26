function deleteItem(id) {
    // console.log(data);
    let flag = data.some(current => current.id===id)
    if (flag === false) {
      console.info(`ID ${id} not in array`);
        return false;
    } 
    let newArr=data.filter((current) => current.id!=id);
    // console.log(newArr);
    return newArr;
}
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
