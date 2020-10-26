const testDiv = document.querySelector("#test");

function updateDom(arr) {
  testDiv.innerHTML = '';
  arr.forEach((curr) => {
    let div = document.createElement("div");
    div.id = curr.id;
    div.innerHTML = `<div class="icon">=D</div><div class="desc">${curr.desc}</div><button type="button">X</button>`;
    div.addEventListener("click", (e) => listener(e));
    testDiv.appendChild(div);
  });
}

function listener(e) {
  if (e.target.type == "button") {
    // deleteItem(e.target.parentNode.id);
    console.log(e.target.parentNode.id);
    checkTask(e.target.parentNode.id);
    // console.log(data);
  }
}


function deleteItem(id) {
  // console.log(data);
  // let flag = data.some((current) => current.id === id);
  // if (flag === false) {
  //   console.info(`ID ${id} not in array`);
  //   return false;
  // }
  data = data.filter((current) => current.id != id);

  updateDom(data);

  // return newArr;
}
// checktest::
function addTodoItem(description) {
  if (description !== null && description.length !== 0) {
    data.push({
      id: lastId++,
      desc: description,
      check: false,
    });

    
    updateDom(data);

    return data[data.length - 1];
    
  } else {
    return "Task description empty!";
  }

  
}

function checkTask(id) {
  console.log(typeof id);
  data.forEach((value) => {
    if (value.id == id) {
      console.log(id, value);
      //   value.check = !value.check;
      if (value.check == true) {
        // console.log(value);
        value.check = false;
        // console.log(value);
      } else {
        // console.log(value);
        value.check = true;

      }
    }
  });
updateDom(data);

}
